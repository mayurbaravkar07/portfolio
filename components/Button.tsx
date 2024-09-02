import cn from 'classnames';

export default function Button(props: any) {
  const { children } = props;
  return (
    <a
      aria-label={props.aria}
      type="button"
      href={props.link}
      className={cn(
        props.isIcon ? 
        "w-10 h-10 bg-gray-200 text-black dark:text-white rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all" : 
        "px-6 h-10 bg-blue-600 text-white rounded-lg dark:bg-blue-600 flex items-center hover:ring-2 ring-blue-300 gap-2 transition-all")}
      >
        {children}
    </a>
  )
}