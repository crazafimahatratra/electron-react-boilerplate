
interface IApp {
    invoke: (channel: string, ...args: any[]) => Promise<any>;
}

const app = (window as any).app as IApp ;
export default app;