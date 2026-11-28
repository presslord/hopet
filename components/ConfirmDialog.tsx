"use client"

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ 
  isOpen,
  title,
  message,
  confirmText = 'Ок',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
}:ConfirmDialogProps) {if (!isOpen) return null;
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={onCancel} />  
            <div className="max-h-150 overflow-scroll no-scrollbar relative z-10 w-full max-w-lg rounded-2xl bg-white pr-2 pl-2 pb-6 pt-6 shadow-2xl sm:p-7">
                <h2 className="mb-1 text-2xl font-bold text-gray-900">
                    {title}
                </h2>
                
                <p className="mb-2 block text-sm font-medium text-gray-700">

                    {message}
                </p>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="cursor-pointer inline-flex items-center justify-center rounded-full border border-[#200f09] bg-[#200f09] text-white px-5 py-3 text-sm font-medium  transition hover:bg-[#200f09]/85">
                        {cancelText}
                    </button>
                    
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="cursor-pointer inline-flex items-center justify-center text-sm font-medium rounded-full px-5 py-2.5 border border-[#d86542]/20 bg-[#d86542]/10 text-[#d86542] hover:bg-[#d86542] hover:text-white">
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}