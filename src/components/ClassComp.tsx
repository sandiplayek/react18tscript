import React, { Component } from "react";
//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
type MyState = {
  count: number; // like this
};

interface schoolDetailsType {
  schoolDetails: { schoolName: string; rank: number }[];
  abc: string;
}

interface SchoolListProps {
  schoolName: string;
  rank: number;
}

interface schoolDetailsType2 {
  schoolDetails: SchoolListProps[];
  abc: string;
}

type schoolDetailsType3 = {
  schoolDetails: SchoolListProps[];
  abc: string;
};

// class ClassComp extends Component<schoolDetailsType, MyState> {
//   constructor(props: schoolDetailsType) {
//     super(props);
//   }

//...or
// class ClassComp extends Component<schoolDetailsType2, MyState> {
//   constructor(props: schoolDetailsType2) {
//     super(props);
//   }

//...or
class ClassComp extends Component<schoolDetailsType3, MyState> {
  constructor(props: schoolDetailsType3) {
    super(props);
  }

  state: MyState = {
    count: 0,
  };

  render() {
    const { schoolDetails, abc } = this.props;

    console.log("class props ...", schoolDetails, abc);
    return (
      <div style={{ border: "2px solid red" }}>
        Class Component State : {this.state.count}
        <ul>
          {schoolDetails &&
            schoolDetails.map((schoolDetail, index) => (
              <li key={index}>
                {schoolDetail.schoolName} {schoolDetail.rank}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ClassComp;
