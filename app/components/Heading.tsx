'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return ( 
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="sm:text-2xl text-xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
            <hr className="w-5/6 m-auto"/>
        </div>
     );
}
 
export default Heading;