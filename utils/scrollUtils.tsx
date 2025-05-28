export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80; // Adjust this to match your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
