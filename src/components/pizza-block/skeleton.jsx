import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader className='pizza-block'
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="145" cy="124" r="114" />
        <rect x="15" y="286" rx="16" ry="16" width="246" height="88" />
        <rect x="15" y="390" rx="15" ry="15" width="107" height="30" />
        <rect x="137" y="390" rx="15" ry="15" width="122" height="57" />
        <rect x="23" y="248" rx="16" ry="16" width="236" height="27" />
    </ContentLoader>
)

export default Skeleton

