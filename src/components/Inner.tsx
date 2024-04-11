type datatype = {
  data: number;
  other: string;
  name: { fname: string; lname: string };
  res:
    | { useid: number; id: number; title: string; completed: boolean }[]
    | null;
};

type datatype2 = {
  data: number;
  other: string;
  name: { fname: string; lname: string };
};
export const Inner = ({ data, other, name, res }: datatype) => {
  //console.log("resinner----", res);
  //console.log(data);

  return (
    <>
      <div style={{ border: "1px solid green" }}>
        <div>Inner</div>
        <div>{data}</div>
        <div>{other}</div> Hi {name.fname} {name.lname}
        {res && res.map((aaa) => <div key={aaa.id}>{aaa.title}</div>)}
      </div>
    </>
  );
};
