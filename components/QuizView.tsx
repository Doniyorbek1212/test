
import React, { useMemo } from 'react';
import { Question } from '../types';

interface QuizViewProps {
  questions: Question[];
  currentIdx: number;
  answers: Record<number, string>;
  onSelect: (idx: number, answer: string) => void;
  onNext: () => void;
  onFinish: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ 
  questions, 
  currentIdx, 
  answers, 
  onSelect, 
  onNext, 
  onFinish 
}) => {
  const currentQuestion = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;
  const selectedAnswer = answers[currentIdx];
  const isAnswered = !!selectedAnswer;

  // Har bir savol uchun variantlarni bir marta aralashtiramiz
  const shuffledOptions = useMemo(() => {
    return [...currentQuestion.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion.id]); // Faqat savol o'zgarganda qayta hisoblanadi

  return (
    <div className="flex-1 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-indigo-600">Savol {currentIdx + 1} / {questions.length}</span>
          <span className="text-slate-500 font-medium">{Math.round(progress)}% bajarildi</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-tight">
          {currentQuestion.question}
        </h3>

        <div className="grid grid-cols-1 gap-3 flex-1">
          {shuffledOptions.map((option, i) => {
            const isCorrect = option === currentQuestion.correctAnswer;
            const isSelected = selectedAnswer === option;
            
            let btnClass = "border-slate-100 hover:border-slate-300 hover:bg-slate-50";
            let iconClass = "border-slate-300";
            
            if (isAnswered) {
              if (isCorrect) {
                btnClass = "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-100 animate-pulse";
                iconClass = "border-emerald-600 bg-emerald-600";
              } else if (isSelected) {
                btnClass = "border-rose-500 bg-rose-50 ring-2 ring-rose-100";
                iconClass = "border-rose-600 bg-rose-600";
              } else {
                btnClass = "border-slate-50 opacity-50 grayscale-[0.5]";
                iconClass = "border-slate-200";
              }
            }

            return (
              <button
                key={i}
                disabled={isAnswered}
                onClick={() => onSelect(currentIdx, option)}
                className={`text-left p-4 md:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${btnClass}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-1 transition-colors ${iconClass}`}>
                  {isAnswered && isCorrect && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <span className={`font-medium ${isAnswered && isCorrect ? 'text-emerald-900' : 'text-slate-700'}`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm font-medium">
            {isAnswered && (
              <span className={selectedAnswer === currentQuestion.correctAnswer ? "text-emerald-600" : "text-rose-600"}>
                {selectedAnswer === currentQuestion.correctAnswer ? "To'g'ri topdingiz!" : "Xato, to'g'ri javob ko'rsatildi."}
              </span>
            )}
          </div>
          <button
            onClick={onNext}
            disabled={!isAnswered}
            className={`px-8 py-3 md:px-10 md:py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${
              !isAnswered 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-1'
            }`}
          >
            {currentIdx === questions.length - 1 ? 'Tugatish' : 'Keyingisi'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
