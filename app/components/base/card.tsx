interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`md:min-w-md lg:min-w-lg p-8 bg-white dark:bg-black shadow-xl rounded-lg ring-1 ring-slate-900/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
