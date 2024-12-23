export default function useSkeleton(componentClass: string) {
  return (
    <div className={`skeleton ${componentClass}`}>&nbsp;</div>
  );
}
