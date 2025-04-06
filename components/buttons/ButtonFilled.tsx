export default function ButtonFilled({ children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className="bg-main text-white px-4 py-2 rounded-lg hover:bg-main/80 transition-all cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
