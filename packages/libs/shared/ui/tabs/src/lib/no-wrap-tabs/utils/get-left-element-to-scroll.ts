export function getLeftElementToScroll(container: HTMLElement) {
  if (container && container.scrollLeft) {
    const offsetLeft = container.scrollLeft;
    const element = Array.from(container.children).find(
      (child) =>
        (child as HTMLElement).offsetLeft > offsetLeft - container.clientWidth
    );

    return {
      element,
      canScrollFurther: Boolean(
        element && (element as HTMLElement).offsetLeft > 0
      ),
    };
  }
  return {
    canScrollFurther: false,
    element: null,
  };
}
