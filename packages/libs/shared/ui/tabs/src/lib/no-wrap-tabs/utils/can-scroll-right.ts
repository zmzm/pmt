export function canScrollRight(container: HTMLElement) {
  return (
    container &&
    container.scrollLeft + container.clientWidth < container.scrollWidth
  );
}
