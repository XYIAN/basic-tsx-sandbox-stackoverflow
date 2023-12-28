//created for https://stackoverflow.com/questions/77724502/how-to-open-a-new-component-in-react-using-material-ui/77725166#77725166
import React, { useState } from "react";
type MonthModel = {
  month: string;
  passRate: number;
};
const months: MonthModel[] = [
  { month: "January", passRate: 80 },
  { month: "February", passRate: 75 },
];

//first component
type MonthCardProps = {
  onClick: () => void;
  m: MonthModel;
};
const MonthCard = ({ onClick, m }: MonthCardProps) => {
  console.log("empty but with access to:", m);
  return (
    <div
      onClick={onClick}
      style={{
        width: "25%",
        backgroundColor: "darkviolet",
        color: "white",
        cursor: "pointer",
      }}
    >
      {m.month}
      {m.passRate}
    </div>
  );
};

//second component
type MonthDetailPanelProps = {
  isOpen: boolean;
  month?: string;
  passRate?: number;
  handleClose: () => void;
};
const MonthDetailPanel = ({
  month,
  passRate,
  handleClose,
}: MonthDetailPanelProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Full Screen Swap</h1>
      <p>
        Data: {month}&nbsp;{passRate}
      </p>
      <div
        style={{
          width: "200px",
          backgroundColor: "darkblue",
          color: "white",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        <h4>Click to close.</h4>
      </div>
      <h5>Date Dashboard</h5>
    </div>
  );
};

//main component
export const Dashboard: React.FC = () => {
  const [showDetailPanel, setShowDetailPanel] = useState<{
    isOpen: boolean;
    month?: string;
    passRate?: number;
  }>({ isOpen: false });
  let i = 0;
  return showDetailPanel.isOpen === false ? (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          width: "100%",
        }}
      >
        {months.map((m) => {
          i = i + 1; //make sure each child has unique key
          return (
            <div
              key={`item ${i}`}
              style={{
                padding: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <MonthCard
                onClick={() =>
                  setShowDetailPanel(() => {
                    return {
                      isOpen: true,
                      month: m.month,
                      passRate: m.passRate,
                    };
                  })
                }
                m={m}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <MonthDetailPanel
      {...showDetailPanel}
      handleClose={() =>
        setShowDetailPanel((prev) => {
          return { ...prev, isOpen: false };
        })
      }
    />
  );
};
