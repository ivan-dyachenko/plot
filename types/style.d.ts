export function styles(mark: any, { title, href, ariaLabel: variaLabel, ariaDescription, ariaHidden, target, fill, fillOpacity, stroke, strokeWidth, strokeOpacity, strokeLinejoin, strokeLinecap, strokeMiterlimit, strokeDasharray, strokeDashoffset, opacity, mixBlendMode, paintOrder, pointerEvents, shapeRendering }: {
    title: any;
    href: any;
    ariaLabel: any;
    ariaDescription: any;
    ariaHidden: any;
    target: any;
    fill: any;
    fillOpacity: any;
    stroke: any;
    strokeWidth: any;
    strokeOpacity: any;
    strokeLinejoin: any;
    strokeLinecap: any;
    strokeMiterlimit: any;
    strokeDasharray: any;
    strokeDashoffset: any;
    opacity: any;
    mixBlendMode: any;
    paintOrder: any;
    pointerEvents: any;
    shapeRendering: any;
}, { ariaLabel: cariaLabel, fill: defaultFill, fillOpacity: defaultFillOpacity, stroke: defaultStroke, strokeOpacity: defaultStrokeOpacity, strokeWidth: defaultStrokeWidth, strokeLinecap: defaultStrokeLinecap, strokeLinejoin: defaultStrokeLinejoin, strokeMiterlimit: defaultStrokeMiterlimit, paintOrder: defaultPaintOrder }: {
    ariaLabel: any;
    fill?: string | undefined;
    fillOpacity: any;
    stroke?: string | undefined;
    strokeOpacity: any;
    strokeWidth: any;
    strokeLinecap: any;
    strokeLinejoin: any;
    strokeMiterlimit: any;
    paintOrder: any;
}): {
    title: {
        value: any;
        optional: boolean;
    };
    href: {
        value: any;
        optional: boolean;
    };
    ariaLabel: {
        value: any;
        optional: boolean;
    };
    fill: {
        value: any;
        scale: string;
        optional: boolean;
    };
    fillOpacity: {
        value: any;
        scale: string;
        optional: boolean;
    };
    stroke: {
        value: any;
        scale: string;
        optional: boolean;
    };
    strokeOpacity: {
        value: any;
        scale: string;
        optional: boolean;
    };
    strokeWidth: {
        value: any;
        optional: boolean;
    };
    opacity: {
        value: any;
        scale: string;
        optional: boolean;
    };
};
export function applyTitle(selection: any, L: any): void;
export function applyTitleGroup(selection: any, L: any): void;
export function applyText(selection: any, T: any): void;
export function applyTextGroup(selection: any, T: any): void;
export function applyChannelStyles(selection: any, { target }: {
    target: any;
}, { ariaLabel: AL, title: T, fill: F, fillOpacity: FO, stroke: S, strokeOpacity: SO, strokeWidth: SW, opacity: O, href: H }: {
    ariaLabel: any;
    title: any;
    fill: any;
    fillOpacity: any;
    stroke: any;
    strokeOpacity: any;
    strokeWidth: any;
    opacity: any;
    href: any;
}): void;
export function applyGroupedChannelStyles(selection: any, { target }: {
    target: any;
}, { ariaLabel: AL, title: T, fill: F, fillOpacity: FO, stroke: S, strokeOpacity: SO, strokeWidth: SW, opacity: O, href: H }: {
    ariaLabel: any;
    title: any;
    fill: any;
    fillOpacity: any;
    stroke: any;
    strokeOpacity: any;
    strokeWidth: any;
    opacity: any;
    href: any;
}): void;
export function groupZ(I: any, Z: any, z: any): IterableIterator<any[]>;
export function groupIndex(I: any, position: any, { z }: {
    z: any;
}, channels: any): Generator<any[] | undefined, void, unknown>;
export function maybeClip(clip: any): false | "frame";
export function applyIndirectStyles(selection: any, mark: any, scales: any, dimensions: any): void;
export function applyDirectStyles(selection: any, mark: any): void;
export function applyAttr(selection: any, name: any, value: any): void;
export function applyStyle(selection: any, name: any, value: any): void;
export function applyTransform(selection: any, mark: any, { x, y }: {
    x: any;
    y: any;
}, tx?: number, ty?: number): void;
export function impliedString(value: any, impliedValue: any): any;
export function impliedNumber(value: any, impliedValue: any): any;
export function maybeClassName(name: any): any;
export function applyInlineStyles(selection: any, style: any): void;
export function applyFrameAnchor({ frameAnchor }: {
    frameAnchor: any;
}, { width, height, marginTop, marginRight, marginBottom, marginLeft }: {
    width: any;
    height: any;
    marginTop: any;
    marginRight: any;
    marginBottom: any;
    marginLeft: any;
}): any[];
export const offset: 0 | 0.5;
