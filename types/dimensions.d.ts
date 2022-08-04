export function Dimensions(scales: any, { x: { axis: xAxis }, y: { axis: yAxis }, fx: { axis: fxAxis }, fy: { axis: fyAxis } }: {
    x?: {
        axis: any;
    } | undefined;
    y?: {
        axis: any;
    } | undefined;
    fx?: {
        axis: any;
    } | undefined;
    fy?: {
        axis: any;
    } | undefined;
}, { width, height, facet: { margin: facetMargin, marginTop: facetMarginTop, marginRight: facetMarginRight, marginBottom: facetMarginBottom, marginLeft: facetMarginLeft }, margin, marginTop, marginRight, marginBottom, marginLeft }?: {
    width?: number | undefined;
    height?: number | undefined;
    facet?: {
        margin: any;
        marginTop?: any;
        marginRight?: any;
        marginBottom?: any;
        marginLeft?: any;
    } | undefined;
    margin: any;
    marginTop?: any;
    marginRight?: any;
    marginBottom?: any;
    marginLeft?: any;
}): {
    width: number;
    height: number;
    marginTop: any;
    marginRight: any;
    marginBottom: any;
    marginLeft: any;
    facetMarginTop: any;
    facetMarginRight: any;
    facetMarginBottom: any;
    facetMarginLeft: any;
};
