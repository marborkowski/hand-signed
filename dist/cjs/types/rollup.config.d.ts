declare const _default: {
    input: string;
    output: ({
        file: any;
        format: string;
        sourcemap: boolean;
        name: string;
        assetFileNames: string;
    } | {
        file: any;
        format: string;
        sourcemap: boolean;
        assetFileNames: string;
        name?: undefined;
    })[];
    plugins: import("rollup").Plugin[];
    external: string[];
};
export default _default;
