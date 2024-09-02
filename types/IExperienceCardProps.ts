export interface IExperienceCardProps {
  /**
   * Role when working on the company
   */
  role: string;
  /**
   * Company name
   */
  company: string;
  /**
   * Company link source
   */
  source?: string;
  /**
   * Description for the experience
   */
  description: string;
  /**
   * Array of images
   */
  images: Array<{alt: string, image: string}>;
  /**
   * startDate for your experience
   */
  startDate: string;
  /**
   * startDate for your experience
   */
  endDate: string;
  /**
   * Tags with label and color to show in the card
   */
  tags?: Array<{label: string, color: string}>;
}