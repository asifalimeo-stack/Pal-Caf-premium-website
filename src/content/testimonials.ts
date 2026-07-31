// No real reviews are wired in yet — add them here once you have them (Google
// Business Profile, Instagram comments, etc.). Each entry needs a real author;
// do not fabricate quotes or names.
export interface Testimonial {
  quote: string;
  author: string;
  source?: string;
}

export const testimonials: Testimonial[] = [];
