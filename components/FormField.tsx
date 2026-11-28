
interface FormFieldProps{
    label: string;
    children: React.ReactNode;
    error?: string | null;
}

export default function FormField({ label,
     children,
     error, 
    }:FormFieldProps) {
    return (
        <div>
            <label htmlFor="application-is-volunteer" className="mb-2 block text-sm font-medium text-gray-700">
                {label}           
            </label>

            {children}

            {error && (
                <span className="text-xs text-red-500 mt-0.5">
                {error}
                </span>
            )}   
        </div>
    );
};
   