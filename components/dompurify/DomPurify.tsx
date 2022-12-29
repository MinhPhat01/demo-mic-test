import React from 'react'
import { Box, useTheme, styled } from '@mui/material'
import { useMeasure } from "react-use";
import DOMPurify from "isomorphic-dompurify";

type DomPurifyProps = {
    content?: string
}

export default function DomPurify({ content }: DomPurifyProps) {
    const [ref, { width }] = useMeasure();
    return (
        <StyledBox
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content, {}),
            }}
            ref={ref}
            sx={{
                "& img": {
                    width: width,
                    height: (width * 9) / 16,
                },
            }}
        />
    )
}

const StyledBox = styled(Box)(({ theme }) => {
    return {
        marginBottom: "20px",
        "& h1,h2,h3,h4,h5,h6": {
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: "600",
            [theme.breakpoints.down("md")]: {
                textAlign: "center",
            },
        },
        "& i, p, ul, li, blockquote": {
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "400",
            color: "#141416",
            [theme.breakpoints.down("md")]: {
                fontSize: "16px",
                lineHeight: "24px",
                textAlign: "justify",
            },
        },
    }
})