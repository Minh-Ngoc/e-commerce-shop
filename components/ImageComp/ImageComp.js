import Wrapper from "../Wrapper";
import Image from "next/image";

const ImageComp = ({src, alt, width, height, className, children, ...props}) => {
    return (
        <Wrapper className={className}>
            <Image 
                src={src} 
                alt={alt}
                width={width}
                height={height}
            {...props}
            />
            {children}
        </Wrapper>
    )
}

export default ImageComp;