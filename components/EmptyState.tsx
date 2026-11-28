interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ 
  title, 
  description,
}:EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">      
        <h3 className="text-lg font-semibold text-gray-900">
            {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 max-w-sm">
            {description}
        </p>
    </div>
  );
};