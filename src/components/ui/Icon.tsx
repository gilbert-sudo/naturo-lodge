type IconProps = {
  name: string;
  className?: string;
  title?: string;
};

export function Icon({ name, className, title }: IconProps) {
  return <iconify-icon icon={name} className={className} title={title} aria-hidden={title ? undefined : true} />;
}
