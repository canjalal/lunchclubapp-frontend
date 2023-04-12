interface HelloProps {
    testProp: string,
    testFn: (x:number) => string
}

export const Hello: React.FunctionComponent<HelloProps> = ({testProp, testFn} : HelloProps) => {
    return (
        <div>
            Hello world
        </div>
    );
}