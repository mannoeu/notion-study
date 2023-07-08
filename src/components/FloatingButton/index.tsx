interface FloatingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
}

export const FloatingButton = ({
  image,
  title,
  text,
  ...rest
}: FloatingButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-colors"
      {...rest}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-12 border border-zinc-600 rounded"
      />
      <div className="flex flex-col text-left">
        <span className="text-sm">{title}</span>
        <span className="text-xs text-zinc-400">{text}</span>
      </div>
    </button>
  );
};
