
import React, { useState, useMemo } from 'react';
import { SUBJECTS_DATA } from './constants';
import { TestState, AppView } from './types';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import HomeView from './components/HomeView';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string | null>(null);
  const [testState, setTestState] = useState<TestState>({
    currentQuestionIndex: 0,
    answers: {},
    isFinished: false,
    startTime: null,
    endTime: null,
  });

  const currentQuestions = useMemo(() => {
    if (!selectedSubjectKey) return [];
    const questions = SUBJECTS_DATA[selectedSubjectKey as keyof typeof SUBJECTS_DATA].questions;
    return [...questions].sort(() => Math.random() - 0.5);
  }, [selectedSubjectKey]);

  const startTest = (key: string) => {
    setSelectedSubjectKey(key);
    setTestState({
      currentQuestionIndex: 0,
      answers: {},
      isFinished: false,
      startTime: Date.now(),
      endTime: null,
    });
    setView(AppView.QUIZ);
  };

  const handleSelectOption = (questionIdx: number, answer: string) => {
    setTestState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionIdx]: answer }
    }));
  };

  const handleNext = () => {
    if (testState.currentQuestionIndex < currentQuestions.length - 1) {
      setTestState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setTestState(prev => ({
      ...prev,
      isFinished: true,
      endTime: Date.now()
    }));
    setView(AppView.RESULT);
  };

  const reset = () => {
    setView(AppView.HOME);
    setSelectedSubjectKey(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <header className="w-full bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={reset}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <h1 className="text-xl font-bold text-slate-800">SportTest ADM</h1>
          </div>
          {view !== AppView.HOME && (
            <button 
              onClick={reset}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              Chiqish
            </button>
          )}
        </div>
      </header>

      <main className="w-full max-w-4xl px-4 py-8 flex-1 flex flex-col">
        {view === AppView.HOME && <HomeView onStart={startTest} />}

        {view === AppView.QUIZ && currentQuestions.length > 0 && (
          <QuizView 
            questions={currentQuestions}
            currentIdx={testState.currentQuestionIndex}
            answers={testState.answers}
            onSelect={handleSelectOption}
            onNext={handleNext}
            onFinish={finishTest}
          />
        )}

        {view === AppView.RESULT && (
          <ResultView 
            questions={currentQuestions}
            answers={testState.answers}
            startTime={testState.startTime}
            endTime={testState.endTime}
            onRestart={() => selectedSubjectKey && startTest(selectedSubjectKey)}
            onHome={reset}
          />
        )}
      </main>

      <footer className="w-full py-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} SportTest ADM Platform.
      </footer>
    </div>
  );
};

export default App;
