import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Shuffle, X, Share2, Lock, HelpCircle, Bookmark, Music, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { getTodaysPuzzle } from './puzzles';

export default function LetterGriddleBuffet() {
  const gameData = getTodaysPuzzle();

  const colors = {
    bgDark: '#4A2C17', bgMid: '#6D4023', bgLight: '#8B5A3C',
    copper: '#B87333', copperLight: '#DA8A67', copperBright: '#CD7F32', copperDark: '#8B5A2B',
    cream: '#FFF8DC', creamWarm: '#FAEBD7', ivory: '#FAF0E6',
    terracotta: '#CC5533', wine: '#722F37',
  };

  const wordCompleteMessages = ["Delizioso! 🍽️", "Magnifico! ✨", "Bellissimo! 🎉", "Perfetto! ⭐", "Bravo! ✨"];
  
  const completionMessages = [
    "A Feast of Feasts!",
    "Simply Divine!",
    "Dinner is Served... and Solved!",
    "Five Stars for Five Words!",
    "A Meal to Remember!"
  ];

  const scrambleWord = (word) => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  };

  const [amuseBoucheComplete, setAmuseBoucheComplete] = useState(false);
  const [amuseBoucheState, setAmuseBoucheState] = useState(() => {
    const ab = gameData.amuseBouche;
    const letters = Array(ab.word.length).fill('');
    letters[ab.revealedIndex] = ab.word[ab.revealedIndex];
    const availableLetters = ab.word.split('').filter((_, idx) => idx !== ab.revealedIndex);
    return { placed: letters, available: scrambleWord(availableLetters.join('')), completed: false };
  });
  
  const [currentCourse, setCurrentCourse] = useState(-1);
  const [preparingCourse, setPreparingCourse] = useState(null);
  const [checkReadingStep, setCheckReadingStep] = useState(0);
  const [showCheckReading, setShowCheckReading] = useState(false);
  const [categoryUnlocked, setCategoryUnlocked] = useState(false);
  const [candleHeight, setCandleHeight] = useState(100);
  const candleTimerRef = useRef(null);

  const [wordStates, setWordStates] = useState(() => {
    return gameData.courses.map(course => 
      course.words.map(w => {
        const letters = Array(w.word.length).fill('');
        letters[w.revealedIndex] = w.word[w.revealedIndex];
        const availableLetters = w.word.split('').filter((_, idx) => idx !== w.revealedIndex);
        return { placed: letters, available: scrambleWord(availableLetters.join('')), completed: false };
      })
    );
  });

  const [categoryState, setCategoryState] = useState(() => ({
    placed: Array(gameData.category.length).fill(''),
    available: scrambleWord(gameData.category),
    completed: false
  }));

  const [hintsRevealed, setHintsRevealed] = useState(gameData.courses.map(course => Array(course.words.length).fill(false)));
  const [amuseBoucheHintRevealed, setAmuseBoucheHintRevealed] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
  const [selectedSlot, setSelectedSlot] = useState({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
  const [wrongPlacements, setWrongPlacements] = useState({});
  const [celebratingWord, setCelebratingWord] = useState(null);
  const [celebratingCategory, setCelebratingCategory] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [completionMessage, setCompletionMessage] = useState('');
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Music state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  
  const musicTracks = [
    { name: "Fine Dining", file: "/buffet-music1.mp3" },
    { name: "Elegance", file: "/buffet-music2.mp3" },
    { name: "Chilled", file: "/buffet-music3.mp3" },
  ];

  const [gameStartTime, setGameStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState(null);
  const elapsedTimerRef = useRef(null);
  const categoryRef = useRef(null);

  const isCourseComplete = (courseIdx) => wordStates[courseIdx]?.every(w => w.completed) || false;
  const allCoursesComplete = gameData.courses.every((_, idx) => isCourseComplete(idx));
  const allComplete = allCoursesComplete && categoryState.completed;

  const getAllSolvedWords = () => {
    const words = [];
    if (amuseBoucheState.completed) words.push(gameData.amuseBouche.word);
    gameData.courses.forEach((course, courseIdx) => {
      course.words.forEach((wordData, wordIdx) => {
        if (wordStates[courseIdx]?.[wordIdx]?.completed) words.push(wordData.word);
      });
    });
    return words;
  };

  useEffect(() => {
    if (!showWelcomeModal && !gameStartTime && !allComplete) setGameStartTime(Date.now());
  }, [showWelcomeModal, gameStartTime, allComplete]);

  useEffect(() => {
    if (gameStartTime && !allComplete) {
      elapsedTimerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - gameStartTime) / 1000));
      }, 1000);
    }
    return () => { if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current); };
  }, [gameStartTime, allComplete]);

  useEffect(() => {
    if (allComplete && !finalTime) {
      setFinalTime(elapsedTime);
      if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    }
  }, [allComplete, finalTime, elapsedTime]);

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

  // Candle burns throughout the game (atmospheric timer)
  useEffect(() => {
    if (!showWelcomeModal && !allComplete) {
      setCandleHeight(100);
      candleTimerRef.current = setInterval(() => {
        setCandleHeight(prev => prev <= 15 ? 15 : prev - (100 / 300)); // Burns over 5 minutes
      }, 1000);
    }
    return () => { if (candleTimerRef.current) clearInterval(candleTimerRef.current); };
  }, [showWelcomeModal, allComplete]);

  // Stop candle when game completes
  useEffect(() => {
    if (allComplete) {
      if (candleTimerRef.current) clearInterval(candleTimerRef.current);
    }
  }, [allComplete]);

  useEffect(() => {
    if (amuseBoucheState.completed && !amuseBoucheComplete) {
      setAmuseBoucheComplete(true);
      setCurrentMessage("A delightful start! 🥄");
      setTimeout(() => setCurrentMessage(''), 1500);
      setPreparingCourse(0);
      setTimeout(() => { setCurrentCourse(0); setPreparingCourse(null); }, 2000);
    }
  }, [amuseBoucheState.completed, amuseBoucheComplete]);

  useEffect(() => {
    if (currentCourse >= 0 && isCourseComplete(currentCourse) && currentCourse < gameData.courses.length - 1) {
      setPreparingCourse(currentCourse + 1);
      setTimeout(() => { setCurrentCourse(currentCourse + 1); setPreparingCourse(null); }, 2000);
    }
    if (allCoursesComplete && !categoryUnlocked && !showCheckReading && currentCourse >= 0) {
      setPreparingCourse('category');
      setTimeout(() => {
        setPreparingCourse(null);
        setShowCheckReading(true);
        setCheckReadingStep(0);
        const solvedWords = getAllSolvedWords();
        const totalSteps = solvedWords.length + 2;
        let step = 0;
        const stepInterval = setInterval(() => {
          step++;
          setCheckReadingStep(step);
          if (step >= totalSteps) {
            clearInterval(stepInterval);
            setTimeout(() => {
              setShowCheckReading(false);
              setCategoryUnlocked(true);
              setTimeout(() => categoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
            }, 2500);
          }
        }, 800);
      }, 1500);
    }
  }, [wordStates, currentCourse, allCoursesComplete, categoryUnlocked, showCheckReading]);

  const checkAmuseBoucheComplete = (placed) => placed.join('') === gameData.amuseBouche.word;

  const handleAmuseBoucheLetterClick = (letterIdx) => {
    if (amuseBoucheState.completed) return;
    if (selectedSlot.area === 'amuseBouche' && selectedSlot.slotIdx !== null) {
      placeLetterInAmuseBouche(selectedSlot.slotIdx, letterIdx);
    } else {
      setSelectedLetter({ area: 'amuseBouche', courseIdx: null, wordIdx: null, letterIdx });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    }
  };

  const handleAmuseBoucheSlotClick = (slotIdx) => {
    if (amuseBoucheState.completed) return;
    if (slotIdx === gameData.amuseBouche.revealedIndex) return;
    const currentPlaced = amuseBoucheState.placed[slotIdx];
    if (currentPlaced) {
      setAmuseBoucheState(prev => {
        const newPlaced = [...prev.placed];
        const newAvailable = [...prev.available, currentPlaced];
        newPlaced[slotIdx] = '';
        return { ...prev, placed: newPlaced, available: newAvailable };
      });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    } else if (selectedLetter.area === 'amuseBouche') {
      placeLetterInAmuseBouche(slotIdx, selectedLetter.letterIdx);
    } else {
      setSelectedSlot({ area: 'amuseBouche', courseIdx: null, wordIdx: null, slotIdx });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    }
  };

  const placeLetterInAmuseBouche = (slotIdx, letterIdx) => {
    const letterToPlace = amuseBoucheState.available[letterIdx];
    const correctLetter = gameData.amuseBouche.word[slotIdx];
    if (letterToPlace !== correctLetter) {
      setWrongPlacements(prev => ({ ...prev, [`amuseBouche-${slotIdx}`]: true }));
      setTimeout(() => setWrongPlacements(prev => { const n = {...prev}; delete n[`amuseBouche-${slotIdx}`]; return n; }), 800);
    }
    setAmuseBoucheState(prev => {
      const newPlaced = [...prev.placed];
      const newAvailable = [...prev.available];
      newPlaced[slotIdx] = letterToPlace;
      newAvailable.splice(letterIdx, 1);
      return { ...prev, placed: newPlaced, available: newAvailable, completed: checkAmuseBoucheComplete(newPlaced) };
    });
    setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
  };

  const checkWordComplete = (courseIdx, wordIdx, placed) => placed.join('') === gameData.courses[courseIdx].words[wordIdx].word;

  const handleWordLetterClick = (courseIdx, wordIdx, letterIdx) => {
    if (courseIdx > currentCourse) return;
    if (wordStates[courseIdx][wordIdx].completed) return;
    if (selectedSlot.area === 'word' && selectedSlot.courseIdx === courseIdx && selectedSlot.wordIdx === wordIdx && selectedSlot.slotIdx !== null) {
      placeLetterInWord(courseIdx, wordIdx, selectedSlot.slotIdx, letterIdx);
    } else {
      setSelectedLetter({ area: 'word', courseIdx, wordIdx, letterIdx });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    }
  };

  const handleWordSlotClick = (courseIdx, wordIdx, slotIdx) => {
    if (courseIdx > currentCourse) return;
    if (wordStates[courseIdx][wordIdx].completed) return;
    if (slotIdx === gameData.courses[courseIdx].words[wordIdx].revealedIndex) return;
    const currentPlaced = wordStates[courseIdx][wordIdx].placed[slotIdx];
    if (currentPlaced) {
      setWordStates(prev => {
        const newStates = prev.map(course => course.map(word => ({...word})));
        const newPlaced = [...newStates[courseIdx][wordIdx].placed];
        const newAvailable = [...newStates[courseIdx][wordIdx].available, currentPlaced];
        newPlaced[slotIdx] = '';
        newStates[courseIdx][wordIdx] = { ...newStates[courseIdx][wordIdx], placed: newPlaced, available: newAvailable };
        return newStates;
      });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    } else if (selectedLetter.area === 'word' && selectedLetter.courseIdx === courseIdx && selectedLetter.wordIdx === wordIdx) {
      placeLetterInWord(courseIdx, wordIdx, slotIdx, selectedLetter.letterIdx);
    } else {
      setSelectedSlot({ area: 'word', courseIdx, wordIdx, slotIdx });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    }
  };

  const placeLetterInWord = (courseIdx, wordIdx, slotIdx, letterIdx) => {
    const letterToPlace = wordStates[courseIdx][wordIdx].available[letterIdx];
    const correctLetter = gameData.courses[courseIdx].words[wordIdx].word[slotIdx];
    if (letterToPlace !== correctLetter) {
      setWrongPlacements(prev => ({ ...prev, [`word-${courseIdx}-${wordIdx}-${slotIdx}`]: true }));
      setTimeout(() => setWrongPlacements(prev => { const n = {...prev}; delete n[`word-${courseIdx}-${wordIdx}-${slotIdx}`]; return n; }), 800);
    }
    setWordStates(prev => {
      const newStates = prev.map(course => course.map(word => ({...word, placed: [...word.placed], available: [...word.available]})));
      const newPlaced = newStates[courseIdx][wordIdx].placed;
      const newAvailable = newStates[courseIdx][wordIdx].available;
      newPlaced[slotIdx] = letterToPlace;
      newAvailable.splice(letterIdx, 1);
      const isComplete = checkWordComplete(courseIdx, wordIdx, newPlaced);
      newStates[courseIdx][wordIdx].completed = isComplete;
      if (isComplete) {
        const flatIdx = gameData.courses.slice(0, courseIdx).reduce((acc, c) => acc + c.words.length, 0) + wordIdx;
        setCelebratingWord({ courseIdx, wordIdx });
        setCurrentMessage(wordCompleteMessages[flatIdx % wordCompleteMessages.length]);
        setTimeout(() => { setCelebratingWord(null); setCurrentMessage(''); }, 1500);
      }
      return newStates;
    });
    setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
  };

  const checkCategoryComplete = (placed) => placed.join('') === gameData.category;

  const handleCategoryLetterClick = (letterIdx) => {
    if (!categoryUnlocked || categoryState.completed) return;
    if (selectedSlot.area === 'category' && selectedSlot.slotIdx !== null) {
      placeLetterInCategory(selectedSlot.slotIdx, letterIdx);
    } else {
      setSelectedLetter({ area: 'category', courseIdx: null, wordIdx: null, letterIdx });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    }
  };

  const handleCategorySlotClick = (slotIdx) => {
    if (!categoryUnlocked || categoryState.completed) return;
    const currentPlaced = categoryState.placed[slotIdx];
    if (currentPlaced) {
      setCategoryState(prev => {
        const newPlaced = [...prev.placed];
        const newAvailable = [...prev.available, currentPlaced];
        newPlaced[slotIdx] = '';
        return { ...prev, placed: newPlaced, available: newAvailable };
      });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
      setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
    } else if (selectedLetter.area === 'category') {
      placeLetterInCategory(slotIdx, selectedLetter.letterIdx);
    } else {
      setSelectedSlot({ area: 'category', courseIdx: null, wordIdx: null, slotIdx });
      setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    }
  };

  const placeLetterInCategory = (slotIdx, letterIdx) => {
    const letterToPlace = categoryState.available[letterIdx];
    const correctLetter = gameData.category[slotIdx];
    if (letterToPlace !== correctLetter) {
      setWrongPlacements(prev => ({ ...prev, [`category-${slotIdx}`]: true }));
      setTimeout(() => setWrongPlacements(prev => { const n = {...prev}; delete n[`category-${slotIdx}`]; return n; }), 800);
    }
    setCategoryState(prev => {
      const newPlaced = [...prev.placed];
      const newAvailable = [...prev.available];
      newPlaced[slotIdx] = letterToPlace;
      newAvailable.splice(letterIdx, 1);
      const isComplete = checkCategoryComplete(newPlaced);
      if (isComplete) {
        setCelebratingCategory(true);
        setTimeout(() => setCelebratingCategory(false), 2000);
      }
      return { ...prev, placed: newPlaced, available: newAvailable, completed: isComplete };
    });
    setSelectedLetter({ area: null, courseIdx: null, wordIdx: null, letterIdx: null });
    setSelectedSlot({ area: null, courseIdx: null, wordIdx: null, slotIdx: null });
  };

  const shuffleCategory = () => setCategoryState(prev => ({ ...prev, available: scrambleWord(prev.available.join('')) }));
  const shuffleWordLetters = (courseIdx, wordIdx) => {
    setWordStates(prev => {
      const newStates = prev.map(course => course.map(word => ({...word, available: [...word.available]})));
      newStates[courseIdx][wordIdx].available = scrambleWord(newStates[courseIdx][wordIdx].available.join(''));
      return newStates;
    });
  };
  const shuffleAmuseBouche = () => setAmuseBoucheState(prev => ({ ...prev, available: scrambleWord(prev.available.join('')) }));
  const toggleHint = (courseIdx, wordIdx) => {
    setHintsRevealed(prev => {
      const newHints = prev.map(course => [...course]);
      newHints[courseIdx][wordIdx] = !newHints[courseIdx][wordIdx];
      return newHints;
    });
  };

  const handleShare = async () => {
  const totalWords = gameData.courses.reduce((acc, c) => acc + c.words.length, 0) + 1;
  const solvedCourseWords = wordStates.flat().filter(w => w.completed).length;
  const solvedWords = solvedCourseWords + (amuseBoucheState.completed ? 1 : 0);
  const plateEmojis = '🥄' + '🍽️'.repeat(solvedCourseWords);
  const shareText = `✨ Letter Griddle Buffet #${gameData.puzzleNumber} 🍽️ ✨\n${plateEmojis}\n${solvedWords}/${totalWords} words solved!\nwww.lettergriddlebuffet.com\nFree & ad-free!\nPart of the Letter Griddle Games 🥞\nMore games: lettergriddle.com`;

  if (navigator.share) {
    try {
      await navigator.share({
        text: shareText
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        copyToClipboard(shareText);
      }
    }
  } else {
    copyToClipboard(shareText);
  }
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

  // Keyboard handler
  const handleKeyDown = useCallback((e) => {
    if (showWelcomeModal || showHowToPlayModal || showStatsModal || showShareModal || showMusicModal || showPrivacyModal || showTermsModal) return;
    const key = e.key.toUpperCase();
    if (!/^[A-Z]$/.test(key)) return;
    
    if (!amuseBoucheComplete) {
      const letterIdx = amuseBoucheState.available.findIndex(l => l === key);
      if (letterIdx !== -1) {
        const emptySlotIdx = amuseBoucheState.placed.findIndex((l, idx) => !l && idx !== gameData.amuseBouche.revealedIndex);
        if (emptySlotIdx !== -1) {
          setSelectedSlot({ area: 'amuseBouche', courseIdx: null, wordIdx: null, slotIdx: emptySlotIdx });
          setTimeout(() => {
            placeLetterInAmuseBouche(emptySlotIdx, letterIdx);
          }, 50);
        }
      }
    } else if (categoryUnlocked && !categoryState.completed) {
      const letterIdx = categoryState.available.findIndex(l => l === key);
      if (letterIdx !== -1) {
        const emptySlotIdx = categoryState.placed.findIndex(l => !l);
        if (emptySlotIdx !== -1) {
          setSelectedSlot({ area: 'category', courseIdx: null, wordIdx: null, slotIdx: emptySlotIdx });
          setTimeout(() => {
            placeLetterInCategory(emptySlotIdx, letterIdx);
          }, 50);
        }
      }
    } else if (currentCourse >= 0) {
      const courseWords = wordStates[currentCourse];
      for (let wordIdx = 0; wordIdx < courseWords.length; wordIdx++) {
        const wordState = courseWords[wordIdx];
        if (!wordState.completed) {
          const letterIdx = wordState.available.findIndex(l => l === key);
          if (letterIdx !== -1) {
            const emptySlotIdx = wordState.placed.findIndex((l, idx) => !l && idx !== gameData.courses[currentCourse].words[wordIdx].revealedIndex);
            if (emptySlotIdx !== -1) {
              setSelectedSlot({ area: 'word', courseIdx: currentCourse, wordIdx, slotIdx: emptySlotIdx });
              setTimeout(() => {
                placeLetterInWord(currentCourse, wordIdx, emptySlotIdx, letterIdx);
              }, 50);
              break;
            }
          }
        }
      }
    }
  }, [amuseBoucheComplete, amuseBoucheState, categoryUnlocked, categoryState, currentCourse, wordStates, showWelcomeModal, showHowToPlayModal, showStatsModal, showShareModal, showMusicModal, showPrivacyModal, showTermsModal]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (allComplete && !showConfetti) {
      setShowConfetti(true);
      setCompletionMessage(completionMessages[Math.floor(Math.random() * completionMessages.length)]);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [allComplete]);

  // Music control functions
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % musicTracks.length;
    setCurrentTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + musicTracks.length) % musicTracks.length;
    setCurrentTrack(prev);
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
  };

  // Handle track change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = musicTracks[currentTrack].file;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
    }
  }, [currentTrack]);

  // Handle track ending - auto-play next
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        const next = (currentTrack + 1) % musicTracks.length;
        setCurrentTrack(next);
      };
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [currentTrack]);

  const sparkleColors = [colors.copper, colors.copperLight, colors.cream, '#E8B4A0', '#D4A574', colors.terracotta];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 50%, ${colors.bgLight} 100%)` }}>
      <style>{`
        @keyframes sparkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.5); } }
        @keyframes confetti-fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        @keyframes pop-in { 0% { transform: scale(0.5) translateX(-50%); opacity: 0; } 100% { transform: scale(1) translateX(-50%); opacity: 1; } }
        @keyframes gentle-shake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-3px); } 40% { transform: translateX(3px); } 60% { transform: translateX(-3px); } 80% { transform: translateX(3px); } }
        @keyframes glow-pulse { 0%, 100% { box-shadow: 0 0 20px ${colors.copper}40; } 50% { box-shadow: 0 0 40px ${colors.copper}80; } }
        @keyframes slot-highlight { 0%, 100% { box-shadow: 0 0 10px ${colors.copper}60; } 50% { box-shadow: 0 0 25px ${colors.copper}99; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 40px ${colors.copper}40; } 50% { box-shadow: 0 0 80px ${colors.copper}70; } }
        @keyframes dot-pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes flicker { 0%, 100% { opacity: 1; transform: scale(1) translateX(0); } 25% { opacity: 0.8; transform: scale(1.1) translateX(-1px); } 50% { opacity: 1; transform: scale(0.9) translateX(1px); } 75% { opacity: 0.9; transform: scale(1.05) translateX(-0.5px); } }
        @keyframes candle-glow { 0%, 100% { box-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00; } 50% { box-shadow: 0 0 15px #FFD700, 0 0 25px #FFA500, 0 0 40px #FF8C00; } }
      `}</style>

      {/* Hidden audio element for music */}
      <audio ref={audioRef} src={musicTracks[currentTrack].file} />

      {/* Sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: Math.random() * 6 + 2 + 'px', height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
            background: sparkleColors[i % sparkleColors.length], opacity: 0.5,
            animation: `sparkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: Math.random() * 2 + 's'
          }} />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="absolute text-2xl" style={{
              left: `${(i * 7) % 100}%`, top: '-40px',
              animation: `confetti-fall 4s ease-in ${(i % 10) * 0.1}s forwards`
            }}>
              {['🎉', '✨', '🍽️', '⭐', '🎊', '👏'][i % 6]}
            </div>
          ))}
        </div>
      )}

      {/* Preparing Course Overlay */}
      {preparingCourse !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-40" style={{ background: `${colors.bgDark}E8` }}>
          <div className="text-center p-8 rounded-3xl" style={{ background: `linear-gradient(135deg, ${colors.wine}90 0%, ${colors.bgDark} 100%)`, border: `2px solid ${colors.copper}`, animation: 'pulse-glow 1.5s ease-in-out infinite' }}>
            <div className="text-5xl mb-4 animate-bounce">{preparingCourse === 'category' ? '📜' : gameData.courses[preparingCourse]?.emoji}</div>
            <p className="text-xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>
              {preparingCourse === 'category' ? 'Preparing the check...' : `Preparing ${gameData.courses[preparingCourse]?.name}...`}
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {[0, 1, 2].map(i => (<div key={i} className="w-3 h-3 rounded-full" style={{ background: colors.copper, animation: `dot-pulse 1s ease-in-out ${i * 0.2}s infinite` }} />))}
            </div>
          </div>
        </div>
      )}

      {/* Check Reading Overlay */}
      {showCheckReading && (
        <div className="fixed inset-0 flex items-center justify-center z-40" style={{ background: `${colors.bgDark}F0` }}>
          <div className="text-center p-8 rounded-3xl max-w-md mx-4" style={{ background: `linear-gradient(135deg, ${colors.wine}90 0%, ${colors.bgDark} 100%)`, border: `2px solid ${colors.copper}` }}>
            <div className="text-5xl mb-4">📜</div>
            <p className="text-xl font-light mb-6" style={{ color: colors.cream, fontFamily: 'Georgia, serif', opacity: checkReadingStep >= 0 ? 1 : 0 }}>Let's see what we had...</p>
            <div className="space-y-2 mb-6">
              {getAllSolvedWords().map((word, idx) => (
                <div key={word} className="transition-all duration-500" style={{ opacity: checkReadingStep > idx ? 1 : 0, transform: checkReadingStep > idx ? 'translateY(0)' : 'translateY(10px)' }}>
                  <span className="inline-block px-4 py-2 rounded-full text-lg font-medium" style={{ background: `${colors.copper}40`, color: colors.cream, border: `1px solid ${colors.copper}60`, fontFamily: 'Georgia, serif' }}>{word}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-light italic" style={{ color: colors.copperLight, fontFamily: 'Georgia, serif', opacity: checkReadingStep > getAllSolvedWords().length ? 1 : 0 }}>Now let's check out at the Category Griddle! ✨</p>
          </div>
        </div>
      )}

      {/* Celebration Message */}
      {currentMessage && (
        <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
          <div className="px-8 py-4 rounded-full text-2xl font-medium" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}`, color: colors.cream, animation: 'pop-in 0.3s ease-out', fontFamily: 'Georgia, serif' }}>{currentMessage}</div>
        </div>
      )}

      {celebratingCategory && (
        <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
          <div className="px-8 py-4 rounded-full text-2xl font-medium" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}`, color: colors.cream, animation: 'pop-in 0.3s ease-out', fontFamily: 'Georgia, serif' }}>Compliments to the Chef! ✨</div>
        </div>
      )}

      {/* Candle */}
      {!allComplete && !showWelcomeModal && (
        <div className="fixed right-6 top-1/4 flex flex-col items-center z-30" style={{ pointerEvents: 'none' }}>
          {/* Flame */}
          <div className="relative mb-1" style={{ opacity: candleHeight > 0 ? 1 : 0 }}>
            <div className="w-5 h-8 rounded-full" style={{ background: 'linear-gradient(to top, #FF6B00 0%, #FFD700 50%, #FFFACD 100%)', animation: 'flicker 0.5s ease-in-out infinite, candle-glow 1s ease-in-out infinite', filter: 'blur(0.5px)' }} />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-4 rounded-full" style={{ background: 'linear-gradient(to top, #FFD700 0%, #FFFACD 100%)', animation: 'flicker 0.3s ease-in-out infinite reverse' }} />
          </div>
          {/* Candle body */}
          <div className="relative w-8 rounded-t-sm overflow-hidden transition-all duration-1000" style={{ height: `${Math.max(candleHeight * 0.9, 10)}px`, maxHeight: '90px', background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)`, border: `1px solid ${colors.copper}40`, boxShadow: `0 0 15px ${colors.copper}30` }}>
            <div className="absolute top-0 left-1 w-1 h-3 rounded-b-full" style={{ background: colors.creamWarm }} />
          </div>
          {/* Candle holder */}
          <div className="w-12 h-4 rounded-b-lg" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `1px solid ${colors.copperLight}40` }} />
          <span className="text-sm mt-2" style={{ color: colors.cream, opacity: 0.8 }}>🕯️</span>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12"></div>
          <div className="text-center flex-1">
            <div className="text-5xl mb-2">🍽️</div>
            <h1 className="text-3xl font-light tracking-wide" style={{ fontFamily: 'Georgia, serif', color: colors.copperLight, textShadow: `2px 2px 4px ${colors.bgDark}` }}>Letter Griddle Buffet</h1>
            <p className="text-sm mt-2 italic" style={{ color: colors.copper, opacity: 0.95 }}>An elegant dinner where one course leads to another</p>
          </div>
          <div className="w-28 flex justify-end gap-1">
            <button onClick={() => setShowMusicModal(true)} className="p-2 rounded-full relative" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}50` }} title="Music">
              <Music size={18} style={{ color: colors.cream }} />
            </button>
            <button onClick={() => setShowHowToPlayModal(true)} className="p-2 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}50` }} title="How to Play">
              <HelpCircle size={18} style={{ color: colors.cream }} />
            </button>
            <button onClick={() => setShowStatsModal(true)} className="p-2 rounded-full text-xl" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}50` }} title="Stats">⭐</button>
          </div>
        </div>

        {/* Amuse-Bouche */}
        {!amuseBoucheComplete && (
          <div className="mb-6 p-5 rounded-2xl" style={{ background: `linear-gradient(135deg, ${colors.wine}70 0%, ${colors.bgDark}90 100%)`, border: `2px solid ${colors.copper}` }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xl">🥄</span>
              <h2 className="text-lg font-medium" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Amuse-Bouche</h2>
              <span className="text-xl">🥄</span>
            </div>
            <p className="text-center text-xs mb-4 italic" style={{ color: colors.creamWarm, opacity: 0.8 }}>A complimentary bite to whet your appetite</p>
            <div className="flex justify-center mb-3">
              <button onClick={() => setAmuseBoucheHintRevealed(!amuseBoucheHintRevealed)} className="text-xs px-3 py-1 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>🍽️ {amuseBoucheHintRevealed ? 'Hide' : 'Hint'}</button>
            </div>
            {amuseBoucheHintRevealed && (<div className="mb-4 p-3 rounded-lg" style={{ background: `${colors.bgDark}80`, border: `1px solid ${colors.copper}40` }}><p style={{ color: colors.creamWarm }} className="text-sm text-center">{gameData.amuseBouche.hint}</p></div>)}
            <div className="flex justify-center gap-2 mb-3">
              {gameData.amuseBouche.word.split('').map((letter, slotIdx) => {
                const placedLetter = amuseBoucheState.placed[slotIdx];
                const isRevealed = slotIdx === gameData.amuseBouche.revealedIndex;
                const isSlotSelected = selectedSlot.area === 'amuseBouche' && selectedSlot.slotIdx === slotIdx;
                const isWrong = wrongPlacements[`amuseBouche-${slotIdx}`];
                return (
                  <div key={slotIdx} onClick={() => !isRevealed && handleAmuseBoucheSlotClick(slotIdx)}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all"
                    style={{
                      background: isWrong ? 'linear-gradient(135deg, #dc143c 0%, #ff6b6b 100%)' : isRevealed ? `linear-gradient(135deg, ${colors.terracotta} 0%, ${colors.wine} 100%)` : placedLetter ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : isSlotSelected ? `${colors.copper}50` : `${colors.cream}20`,
                      border: isWrong ? '2px solid #ff6b6b' : isRevealed ? `2px solid ${colors.copperLight}` : placedLetter ? `2px solid ${colors.copper}` : isSlotSelected ? `2px solid ${colors.copperLight}` : `2px dashed ${colors.copper}50`,
                      color: isWrong ? colors.cream : (isRevealed || placedLetter) ? (isRevealed ? colors.cream : colors.bgDark) : 'transparent',
                      fontFamily: 'Georgia, serif',
                      animation: isWrong ? 'gentle-shake 0.4s ease-in-out' : isSlotSelected ? 'slot-highlight 1s ease-in-out infinite' : 'none'
                    }}>{placedLetter}</div>
                );
              })}
            </div>
            <div className="flex justify-center gap-2 flex-wrap mb-2">
              {amuseBoucheState.available.map((letter, letterIdx) => {
                const isSelected = selectedLetter.area === 'amuseBouche' && selectedLetter.letterIdx === letterIdx;
                return (
                  <button key={letterIdx} onClick={() => handleAmuseBoucheLetterClick(letterIdx)}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold rounded-lg transition-all"
                    style={{
                      background: isSelected ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : `linear-gradient(135deg, ${colors.creamWarm} 0%, ${colors.copperLight} 100%)`,
                      border: isSelected ? `2px solid ${colors.copper}` : `2px solid ${colors.copper}60`,
                      color: colors.bgDark, fontFamily: 'Georgia, serif',
                      transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                      boxShadow: isSelected ? `0 0 15px ${colors.copper}` : '0 2px 8px rgba(0,0,0,0.4)'
                    }}>{letter}</button>
                );
              })}
            </div>
            {amuseBoucheState.available.length > 1 && (
              <div className="text-center">
                <button onClick={shuffleAmuseBouche} className="px-3 py-1 rounded-full text-xs inline-flex items-center gap-1" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
                  <Shuffle size={12} /> Shuffle
                </button>
              </div>
            )}
          </div>
        )}

        {/* Course Progress */}
        {amuseBoucheComplete && (
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}` }}>✓</div>
              <span className="text-xs mt-1" style={{ color: colors.cream, opacity: 0.9, fontSize: '10px' }}>Amuse</span>
            </div>
            {gameData.courses.map((course, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all" style={{
                  background: isCourseComplete(idx) ? `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)` : idx <= currentCourse ? `${colors.wine}80` : `${colors.bgDark}80`,
                  border: isCourseComplete(idx) ? `2px solid ${colors.cream}` : idx <= currentCourse ? `2px solid ${colors.copper}60` : `2px solid ${colors.copper}30`,
                  opacity: idx <= currentCourse ? 1 : 0.5
                }}>{isCourseComplete(idx) ? '✓' : course.emoji}</div>
                <span className="text-xs mt-1" style={{ color: colors.cream, opacity: idx <= currentCourse ? 0.9 : 0.4, fontSize: '10px' }}>{course.name.split(' ')[0]}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{
                background: categoryState.completed ? `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)` : categoryUnlocked ? `${colors.wine}80` : `${colors.bgDark}80`,
                border: categoryState.completed ? `2px solid ${colors.cream}` : categoryUnlocked ? `2px solid ${colors.copper}60` : `2px solid ${colors.copper}30`,
                opacity: categoryUnlocked ? 1 : 0.5
              }}>{categoryState.completed ? '✓' : '📜'}</div>
              <span className="text-xs mt-1" style={{ color: colors.cream, opacity: categoryUnlocked ? 0.9 : 0.4, fontSize: '10px' }}>Check</span>
            </div>
          </div>
        )}

        {amuseBoucheComplete && (
          <>
            {/* Category Griddle */}
            <div ref={categoryRef} className="mb-6 p-5 rounded-2xl transition-all" style={{
              background: categoryUnlocked ? `linear-gradient(135deg, ${colors.wine}80 0%, ${colors.bgDark}90 100%)` : `linear-gradient(135deg, ${colors.bgDark}60 0%, ${colors.bgDark}80 100%)`,
              border: categoryUnlocked ? `2px solid ${colors.copper}60` : `2px dashed ${colors.copper}30`,
              opacity: categoryUnlocked ? 1 : 0.6
            }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl">{categoryUnlocked ? '✨' : <Lock size={20} style={{ color: colors.copper }} />}</span>
                <h2 className="text-lg font-medium" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>
                  {categoryState.completed ? 'Category Revealed!' : categoryUnlocked ? 'Category Griddle' : "Complete all courses to unlock the chef's secret category griddle"}
                </h2>
                <span className="text-xl">{categoryUnlocked ? '✨' : <Lock size={20} style={{ color: colors.copper }} />}</span>
              </div>
              <div className="flex justify-center gap-2 mb-4 flex-wrap">
                {gameData.category.split('').map((_, slotIdx) => {
                  const placedLetter = categoryState.placed[slotIdx];
                  const isSlotSelected = selectedSlot.area === 'category' && selectedSlot.slotIdx === slotIdx;
                  const isWrong = wrongPlacements[`category-${slotIdx}`];
                  return (
                    <div key={slotIdx} onClick={() => categoryUnlocked && handleCategorySlotClick(slotIdx)}
                      className="w-10 h-10 flex items-center justify-center text-lg font-bold rounded-lg cursor-pointer transition-all"
                      style={{
                        background: isWrong ? 'linear-gradient(135deg, #dc143c 0%, #ff6b6b 100%)' : placedLetter ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : isSlotSelected ? `${colors.copper}50` : categoryUnlocked ? `${colors.cream}20` : `${colors.bgDark}40`,
                        border: isWrong ? '2px solid #ff6b6b' : placedLetter ? `2px solid ${colors.copper}` : isSlotSelected ? `2px solid ${colors.copperLight}` : categoryUnlocked ? `2px dashed ${colors.copper}70` : `2px dashed ${colors.copper}30`,
                        color: placedLetter ? colors.bgDark : 'transparent', fontFamily: 'Georgia, serif',
                        animation: isWrong ? 'gentle-shake 0.4s ease-in-out' : isSlotSelected ? 'slot-highlight 1s ease-in-out infinite' : 'none'
                      }}>{placedLetter}</div>
                  );
                })}
              </div>
              {categoryUnlocked && !categoryState.completed && (
                <>
                  <div className="flex justify-center gap-2 flex-wrap mb-3">
                    {categoryState.available.map((letter, letterIdx) => {
                      const isSelected = selectedLetter.area === 'category' && selectedLetter.letterIdx === letterIdx;
                      return (
                        <button key={letterIdx} onClick={() => handleCategoryLetterClick(letterIdx)}
                          className="w-9 h-9 flex items-center justify-center text-base font-bold rounded-lg transition-all"
                          style={{
                            background: isSelected ? `linear-gradient(135deg, ${colors.copperLight} 0%, ${colors.copper} 100%)` : `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`,
                            border: isSelected ? `2px solid ${colors.cream}` : `2px solid ${colors.copperLight}50`,
                            color: colors.cream, fontFamily: 'Georgia, serif',
                            transform: isSelected ? 'scale(1.15)' : 'scale(1)'
                          }}>{letter}</button>
                      );
                    })}
                  </div>
                  <div className="text-center">
                    <button onClick={shuffleCategory} className="px-4 py-2 rounded-full text-sm inline-flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
                      <Shuffle size={14} /> Shuffle
                    </button>
                  </div>
                </>
              )}
              {categoryState.completed && <div className="text-center"><span className="text-lg" style={{ color: colors.copperLight }}>✨</span></div>}
            </div>

            {/* Completion Banner */}
            {allComplete && (
              <div className="mb-6 p-6 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${colors.wine}80 0%, ${colors.bgDark}90 100%)`, border: `2px solid ${colors.copper}`, animation: 'glow-pulse 2s ease-in-out infinite' }}>
                <p className="text-4xl font-light mb-2" style={{ color: colors.copperLight, fontFamily: 'Georgia, serif' }}>{completionMessage || "A Feast of Feasts!"}</p>
                <p style={{ color: colors.cream }} className="text-sm mb-2 opacity-80">You've completed the entire buffet!</p>
                {finalTime && <p style={{ color: colors.creamWarm }} className="text-lg mb-2">🍽️ You dined for {formatTime(finalTime)}</p>}

                 <p style={{ color: colors.cream }} className="text-xs mb-4 opacity-70">New puzzles daily at 8 PM EST 🍽️</p>
                <button onClick={() => setShowShareModal(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
                  <Share2 size={16} /> Share Results
                </button>
              </div>
            )}

            {/* Courses */}
            <div className="space-y-6">
              {gameData.courses.map((course, courseIdx) => {
                const isLocked = courseIdx > currentCourse;
                const isComplete = isCourseComplete(courseIdx);
                return (
                  <div key={courseIdx} className="rounded-2xl overflow-hidden transition-all" style={{
                    background: isComplete ? `linear-gradient(135deg, ${colors.wine}50 0%, ${colors.bgDark}70 100%)` : isLocked ? `linear-gradient(135deg, ${colors.bgDark}40 0%, ${colors.bgDark}60 100%)` : `linear-gradient(135deg, ${colors.bgDark}90 0%, ${colors.bgMid}80 100%)`,
                    border: isComplete ? `2px solid ${colors.copper}` : isLocked ? `2px dashed ${colors.copper}30` : `2px solid ${colors.copper}50`,
                    opacity: isLocked ? 0.5 : 1
                  }}>
                    <div className="p-4 flex items-center justify-between" style={{ background: isComplete ? `${colors.copper}30` : 'transparent', borderBottom: `1px solid ${colors.copper}30` }}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{course.emoji}</span>
                        <div>
                          <h3 className="text-lg font-medium" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>{course.name}</h3>
                          <p className="text-xs" style={{ color: colors.cream, opacity: 0.6 }}>{course.words.length} {course.words.length === 1 ? 'word' : 'words'}</p>
                        </div>
                      </div>
                      {isLocked && <div className="flex items-center gap-2" style={{ color: colors.copper }}><Lock size={16} /><span className="text-xs">Locked</span></div>}
                      {isComplete && <div className="px-3 py-1 rounded-full text-xs" style={{ background: `${colors.copper}40`, color: colors.cream, border: `1px solid ${colors.copper}` }}>✓ Complete</div>}
                    </div>
                    {!isLocked && (
                      <div className="p-4 space-y-4">
                        {course.words.map((wordData, wordIdx) => {
                          const state = wordStates[courseIdx][wordIdx];
                          const isCelebrating = celebratingWord?.courseIdx === courseIdx && celebratingWord?.wordIdx === wordIdx;
                          return (
                            <div key={wordIdx} className="rounded-xl p-4 transition-all" style={{
                              background: state.completed ? `linear-gradient(135deg, ${colors.wine}40 0%, ${colors.bgDark}60 100%)` : `linear-gradient(135deg, ${colors.bgDark}60 0%, ${colors.bgMid}40 100%)`,
                              border: state.completed ? `1px solid ${colors.copper}60` : `1px solid ${colors.copper}30`,
                              transform: isCelebrating ? 'scale(1.02)' : 'scale(1)'
                            }}>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">🍽️</span>
                                  <span style={{ color: colors.cream }} className="text-xs opacity-80">{wordData.word.length} letters</span>
                                </div>
                                <button onClick={() => toggleHint(courseIdx, wordIdx)} className="text-xs px-3 py-1 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
                                  🍽️ {hintsRevealed[courseIdx][wordIdx] ? 'Hide' : 'Hint'}
                                </button>
                              </div>
                              {hintsRevealed[courseIdx][wordIdx] && (
                                <div className="mb-3 p-3 rounded-lg" style={{ background: `${colors.bgDark}80`, border: `1px solid ${colors.copper}40` }}>
                                  <p style={{ color: colors.creamWarm }} className="text-sm">{wordData.hint}</p>
                                </div>
                              )}
                              <div className="flex justify-center gap-2 mb-3">
                                {wordData.word.split('').map((letter, slotIdx) => {
                                  const placedLetter = state.placed[slotIdx];
                                  const isRevealed = slotIdx === wordData.revealedIndex;
                                  const isSlotSelected = selectedSlot.area === 'word' && selectedSlot.courseIdx === courseIdx && selectedSlot.wordIdx === wordIdx && selectedSlot.slotIdx === slotIdx;
                                  const isWrong = wrongPlacements[`word-${courseIdx}-${wordIdx}-${slotIdx}`];
                                  return (
                                    <div key={slotIdx} onClick={() => !isRevealed && handleWordSlotClick(courseIdx, wordIdx, slotIdx)}
                                      className="w-10 h-10 flex items-center justify-center text-lg font-bold rounded-lg cursor-pointer transition-all"
                                      style={{
                                        background: isWrong ? 'linear-gradient(135deg, #dc143c 0%, #ff6b6b 100%)' : state.completed ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : isRevealed ? `linear-gradient(135deg, ${colors.terracotta} 0%, ${colors.wine} 100%)` : placedLetter ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : isSlotSelected ? `${colors.copper}50` : `${colors.cream}20`,
                                        border: isWrong ? '2px solid #ff6b6b' : state.completed ? `2px solid ${colors.copper}` : isRevealed ? `2px solid ${colors.copperLight}` : placedLetter ? `2px solid ${colors.copper}` : isSlotSelected ? `2px solid ${colors.copperLight}` : `2px dashed ${colors.copper}50`,
                                        color: isWrong ? colors.cream : state.completed ? colors.bgDark : (isRevealed || placedLetter) ? (isRevealed ? colors.cream : colors.bgDark) : 'transparent',
                                        fontFamily: 'Georgia, serif',
                                        transform: isCelebrating ? 'scale(1.1)' : isSlotSelected ? 'scale(1.05)' : 'scale(1)',
                                        animation: isWrong ? 'gentle-shake 0.4s ease-in-out' : isSlotSelected ? 'slot-highlight 1s ease-in-out infinite' : 'none'
                                      }}>{placedLetter}</div>
                                  );
                                })}
                              </div>
                              {!state.completed && (
                                <>
                                  <div className="flex justify-center gap-2 flex-wrap mb-2">
                                    {state.available.map((letter, letterIdx) => {
                                      const isSelected = selectedLetter.area === 'word' && selectedLetter.courseIdx === courseIdx && selectedLetter.wordIdx === wordIdx && selectedLetter.letterIdx === letterIdx;
                                      return (
                                        <button key={letterIdx} onClick={() => handleWordLetterClick(courseIdx, wordIdx, letterIdx)}
                                          className="w-9 h-9 flex items-center justify-center text-base font-bold rounded-lg transition-all"
                                          style={{
                                            background: isSelected ? `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)` : `linear-gradient(135deg, ${colors.creamWarm} 0%, ${colors.copperLight} 100%)`,
                                            border: isSelected ? `2px solid ${colors.copper}` : `2px solid ${colors.copper}60`,
                                            color: colors.bgDark, fontFamily: 'Georgia, serif',
                                            transform: isSelected ? 'scale(1.15)' : 'scale(1)'
                                          }}>{letter}</button>
                                      );
                                    })}
                                  </div>
                                  {state.available.length > 1 && (
                                    <div className="text-center">
                                      <button onClick={() => shuffleWordLetters(courseIdx, wordIdx)} className="px-3 py-1 rounded-full text-xs inline-flex items-center gap-1" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
                                        <Shuffle size={12} /> Shuffle
                                      </button>
                                    </div>
                                  )}
                                </>
                              )}
                              {state.completed && !isCelebrating && <div className="text-center"><span className="text-xl">✨</span></div>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <a href="https://lettergriddle.com" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium">🥞 Letter Griddle Games</a>
          <p style={{ color: colors.cream }} className="text-sm opacity-80">{!amuseBoucheComplete ? "🥄 Start with the amuse-bouche to begin your meal" : "🍽️ Complete each course to unlock the next"}</p>
        </div>
        <div className="mt-6 text-center text-xs" style={{ color: colors.cream, opacity: 0.6 }}>
          <p>© {new Date().getFullYear()} Letter Griddle Buffet</p>
          <div className="mt-2 space-x-4">
            <button onClick={() => setShowPrivacyModal(true)} className="underline hover:opacity-80">Privacy</button>
            <button onClick={() => setShowTermsModal(true)} className="underline hover:opacity-80">Terms</button>
          </div>
        </div>
      </div>

      {/* Stats Modal */}
      {showStatsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowStatsModal(false)}>
          <div className="max-w-sm w-full rounded-3xl p-8 relative" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowStatsModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🍽️</div>
              <h2 className="text-2xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Your Buffet Stats</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40` }}>
                <div className="text-3xl font-light mb-1" style={{ color: colors.cream }}>7</div>
                <div className="text-xs" style={{ color: colors.cream, opacity: 0.7 }}>Puzzles Completed</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40` }}>
                <div className="text-3xl font-light mb-1" style={{ color: colors.cream }}>🔥 4</div>
                <div className="text-xs" style={{ color: colors.cream, opacity: 0.7 }}>Current Streak</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40` }}>
                <div className="text-3xl font-light mb-1" style={{ color: colors.cream }}>⭐ 6</div>
                <div className="text-xs" style={{ color: colors.cream, opacity: 0.7 }}>Longest Streak</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40` }}>
                <div className="text-3xl font-light mb-1" style={{ color: colors.cream }}>4:05</div>
                <div className="text-xs" style={{ color: colors.cream, opacity: 0.7 }}>Fastest Time</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowShareModal(false)}>
          <div className="max-w-sm w-full rounded-3xl p-8 relative" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowShareModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <h2 className="text-2xl font-light text-center mb-6" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Share Your Feast! ✨</h2>
            <div className="p-4 rounded-xl mb-4 text-sm" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40`, fontFamily: 'monospace' }}>
              <p style={{ color: colors.cream }} className="whitespace-pre-wrap">
{`✨ Letter Griddle Buffet #1 🍽️
🥄${'🍽️'.repeat(wordStates.flat().filter(w => w.completed).length)}
${wordStates.flat().filter(w => w.completed).length + (amuseBoucheState.completed ? 1 : 0)}/6 words solved!${finalTime ? `\nDined for ${formatTime(finalTime)}` : ''}
Bravo! ✨`}
              </p>
            </div>
            <button onClick={handleShare} className="w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>
              {shareCopied ? '✓ Copied!' : <><Share2 size={16} /> Copy to Clipboard</>}
            </button>
            <p className="text-center text-sm mt-4" style={{ color: colors.creamWarm }}>Enjoyed your meal? Invite a friend! 🍽️</p>
          </div>
        </div>
      )}

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }}>
          <div className="max-w-sm w-full rounded-3xl p-8 text-center" style={{ background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamWarm} 100%)`, border: `2px solid ${colors.copper}` }}>
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-sm mb-2" style={{ color: colors.copper, fontFamily: 'Georgia, serif' }}>Welcome to Letter Griddle Buffet</p>
            <h2 className="text-3xl font-light mb-6" style={{ color: colors.bgDark, fontFamily: 'Georgia, serif' }}>Your table is ready.</h2>
            <button onClick={() => setShowWelcomeModal(false)} className="w-full py-4 rounded-full text-lg font-medium mb-4" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>Today's Special</button>
            <button onClick={() => { setShowWelcomeModal(false); setShowHowToPlayModal(true); }} className="text-sm underline" style={{ color: colors.copper }}>How to dine</button>
          </div>
        </div>
      )}

      {/* How to Play Modal */}
      {showHowToPlayModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowHowToPlayModal(false)}>
          <div className="max-w-md w-full rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowHowToPlayModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🍽️</div>
              <h2 className="text-2xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>How to Dine</h2>
            </div>
            <div className="space-y-4" style={{ color: colors.cream }}>
              <div className="p-4 rounded-xl" style={{ background: `${colors.wine}50`, border: `1px solid ${colors.copper}30` }}>
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">🥄</span><span className="font-medium" style={{ color: colors.copperLight }}>Amuse-Bouche</span></div>
                <p className="text-sm opacity-90">Start with a small bite, a 3-letter word to whet your appetite.</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: `${colors.wine}50`, border: `1px solid ${colors.copper}30` }}>
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">🥗🍝🍰</span><span className="font-medium" style={{ color: colors.copperLight }}>Three Courses</span></div>
                <p className="text-sm opacity-90">Progress through Appetizer, Main Course, and Dessert. Each course unlocks after completing the previous one.</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: `${colors.wine}50`, border: `1px solid ${colors.copper}30` }}>
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">📜</span><span className="font-medium" style={{ color: colors.copperLight }}>The Check</span></div>
                <p className="text-sm opacity-90">After dessert, solve the Category Griddle to reveal what all the words have in common!</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: `${colors.wine}50`, border: `1px solid ${colors.copper}30` }}>
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">⌨️</span><span className="font-medium" style={{ color: colors.copperLight }}>Controls</span></div>
                <p className="text-sm opacity-90"><strong>Touch/Click:</strong> Tap a letter, then tap a slot<br/><strong>Desktop:</strong> Just type the letters on your keyboard!</p>
              </div>
            </div>
            <button onClick={() => setShowHowToPlayModal(false)} className="w-full py-3 rounded-full text-sm font-semibold mt-6" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>Let's Eat! 🍽️</button>
          </div>
        </div>
      )}

      {/* Music Modal */}
      {showMusicModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowMusicModal(false)}>
          <div className="max-w-sm w-full rounded-3xl p-8 relative" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowMusicModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🎵</div>
              <h2 className="text-2xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Dinner Music</h2>
            </div>
            <div className="p-4 rounded-xl mb-4 text-center" style={{ background: `${colors.wine}60`, border: `1px solid ${colors.copper}40` }}>
              <p className="text-xs mb-1" style={{ color: colors.creamWarm, opacity: 0.7 }}>Now Playing</p>
              <p className="text-lg" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>{musicTracks[currentTrack].name}</p>
            </div>
            <div className="flex justify-center items-center gap-4 mb-6">
              <button onClick={prevTrack} className="p-2 rounded-full transition-transform hover:scale-110" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}><SkipBack size={20} /></button>
              <button onClick={togglePlay} className="p-4 rounded-full transition-transform hover:scale-110" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, border: `2px solid ${colors.cream}50`, color: colors.cream }}><span className="text-2xl">{isPlaying ? '⏸️' : '▶️'}</span></button>
              <button onClick={nextTrack} className="p-2 rounded-full transition-transform hover:scale-110" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}><SkipForward size={20} /></button>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ background: `${colors.wine}40`, border: `1px solid ${colors.copper}30` }}>
              <button onClick={toggleMute} style={{ color: colors.cream }}>{isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}</button>
              <input type="range" min="0" max="1" step="0.1" value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="flex-1 h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, ${colors.copper} ${volume * 100}%, ${colors.bgDark} ${volume * 100}%)` }} />
            </div>
            <div className="space-y-2">
              <p className="text-xs mb-2" style={{ color: colors.creamWarm, opacity: 0.7 }}>Playlist</p>
              {musicTracks.map((track, index) => (
                <button key={index} onClick={() => selectTrack(index)} className="w-full p-3 rounded-xl text-left flex items-center gap-3 transition-all" style={{ background: currentTrack === index ? `${colors.copper}40` : `${colors.wine}30`, border: currentTrack === index ? `1px solid ${colors.copper}` : `1px solid ${colors.copper}20`, color: colors.cream }}>
                  <span>{currentTrack === index && isPlaying ? '🎵' : '🎶'}</span>
                  <span className="flex-1">{track.name}</span>
                  {currentTrack === index && <span className="text-xs" style={{ color: colors.copperLight }}>{isPlaying ? 'Playing' : 'Selected'}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowPrivacyModal(false)}>
          <div className="max-w-lg w-full rounded-3xl p-8 relative max-h-[85vh] overflow-y-auto" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🔒</div>
              <h2 className="text-2xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-sm" style={{ color: colors.creamWarm }}>
              <p><strong style={{ color: colors.copperLight }}>Last Updated:</strong> January 14, 2026</p>
              
              <p>Letter Griddle Buffet ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you play our game.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Information We Collect</h3>
              <p>We collect minimal information to provide and improve the game experience:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Game Progress:</strong> Your puzzle completion status, streaks, and statistics are stored locally on your device using browser storage.</li>
                <li><strong>Usage Data:</strong> We may collect anonymous analytics about how the game is played to improve the experience.</li>
              </ul>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>How We Use Your Information</h3>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Save your game progress and statistics</li>
                <li>Improve and optimize the game experience</li>
                <li>Track anonymous usage patterns</li>
              </ul>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Data Storage</h3>
              <p>All game data is stored locally on your device. We do not collect personal information such as your name, email, or location.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Third-Party Services</h3>
              <p>We may use third-party analytics services that collect anonymous usage data. These services have their own privacy policies.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Children's Privacy</h3>
              <p>Letter Griddle Buffet is suitable for all ages. We do not knowingly collect personal information from children.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us through our website.</p>
            </div>
            <button onClick={() => setShowPrivacyModal(false)} className="w-full py-3 rounded-full text-sm font-semibold mt-6" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>Close</button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: `${colors.bgDark}F5` }} onClick={() => setShowTermsModal(false)}>
          <div className="max-w-lg w-full rounded-3xl p-8 relative max-h-[85vh] overflow-y-auto" style={{ background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMid} 100%)`, border: `2px solid ${colors.copper}60` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowTermsModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.copper, color: colors.cream }}><X size={18} /></button>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">📜</div>
              <h2 className="text-2xl font-light" style={{ color: colors.cream, fontFamily: 'Georgia, serif' }}>Terms of Service</h2>
            </div>
            <div className="space-y-4 text-sm" style={{ color: colors.creamWarm }}>
              <p><strong style={{ color: colors.copperLight }}>Last Updated:</strong> December 2025</p>
              
              <p>Welcome to Letter Griddle Buffet! By accessing or playing this game, you agree to be bound by these Terms of Service.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Use of the Game</h3>
              <p>Letter Griddle Buffet is provided for personal, non-commercial entertainment purposes. You agree to use the game in accordance with all applicable laws and regulations.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Intellectual Property</h3>
              <p>All content, design, graphics, and gameplay mechanics of Letter Griddle Buffet are owned by us and are protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our permission.</p>

              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Fictional Content</h3>
              <p>Letter Griddle Buffet, including the Letter Griddle Cafe, the town of Griddle Falls, the Trivia Crew characters, and all related stories, vignettes, and recipes, is a work of fiction. All characters, locations, and events are products of the creator's imagination. Any resemblance to actual persons, living or dead, businesses, events, or locales is entirely coincidental.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Game Progress</h3>
              <p>Game progress and statistics are stored locally on your device. We are not responsible for any loss of data due to clearing browser data, device changes, or technical issues.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Disclaimer</h3>
              <p>Letter Griddle Buffet is provided "as is" without warranties of any kind. We do not guarantee that the game will be error-free or uninterrupted.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Limitation of Liability</h3>
              <p>We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the game.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Changes to Terms</h3>
              <p>We reserve the right to modify these Terms of Service at any time. Continued use of the game after changes constitutes acceptance of the new terms.</p>
              
              <h3 className="text-lg font-medium pt-2" style={{ color: colors.copperLight }}>Contact</h3>
              <p>If you have questions about these Terms, please contact us through our website.</p>
            </div>
            <button onClick={() => setShowTermsModal(false)} className="w-full py-3 rounded-full text-sm font-semibold mt-6" style={{ background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperDark} 100%)`, color: colors.cream }}>Close</button>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
}
