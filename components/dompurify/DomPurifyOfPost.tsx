import React from 'react'
import { Box, styled } from '@mui/material'
import DOMPurify from 'isomorphic-dompurify';

type DomPurifyOfPostProps = {
    key: number,
    value: string | Node
}

export default function DomPurifyOfPost({ key, value }: DomPurifyOfPostProps) {
    return (
        <StyledBox
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(value, { ALLOWED_TAGS: ['q'] })
            }} key={key}
        >
        </StyledBox>
    )
}

const StyledBox = styled(Box)(() => {
    return {
        color: "#777E91",
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "justify",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 4,
        overflow: "hidden",
        minHeight: "96px",
    }
})
