//https://react.dev/learn/typescript
//no issue if the file is renamed and use as All.tsx
export type names = { fname: string; lname: string };

export type personProps = {
  name: names;
  id?: number;
};

export type statusProps = {
  status: "loading" | "success" | "error";
};

export type CssProps = {
  styles: React.CSSProperties;
};

export type ChildrenProps = { children: string };

export interface ComponentAsProps {
  children: React.ReactNode;
}

//button event props
export interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
//button event props
export type propTypes = {
  handleClick2: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
};
//input event props
export type typeInput = {
  value: string;
  handlechange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
