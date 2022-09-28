import "./App.css";
import { useEffect, useState } from "react";

const initialConditions = {
  r1: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  },
  r2: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  },
  r3: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  },
  r4: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  },
  r5: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  },
};

function App() {
  const [pictureIsALab, setPictureIsALab] = useState(true);
  const [currentModel, setCurrentModel] = useState(initialConditions);
  const [currentPicture, setCurrentPicture] = useState(initialConditions);

  const [inRevealMode, setInRevealMode] = useState(false);
  useEffect(() => {
    const getANewPicture = () => {
      const labradorBase = {
        r1: {
          c1: 1,
          c2: 0.8,
          c3: 1,
          c4: 0.8,
          c5: 1,
        },
        r2: {
          c1: 0.7,
          c2: 0.5,
          c3: 0.6,
          c4: 0.5,
          c5: 0.7,
        },
        r3: {
          c1: 0.7,
          c2: 0.4,
          c3: 0.2,
          c4: 0.4,
          c5: 0.7,
        },
        r4: {
          c1: 1,
          c2: 0.4,
          c3: 0.6,
          c4: 0.5,
          c5: 1,
        },
        r5: {
          c1: 1,
          c2: 0.7,
          c3: 0.6,
          c4: 0.8,
          c5: 1,
        },
      };
      setCurrentPicture({
        r1: {
          c1: pictureIsALab
            ? Math.random() *
              (labradorBase.r1.c1 +
                0.1 -
                labradorBase.r1.c1 -
                0.1 +
                labradorBase.r1.c1 -
                0.1)
            : Math.random(),
          c2: pictureIsALab
            ? Math.random() *
              (labradorBase.r1.c2 +
                0.1 -
                labradorBase.r1.c2 -
                0.1 +
                labradorBase.r1.c2 -
                0.1)
            : Math.random(),
          c3: pictureIsALab
            ? Math.random() *
              (labradorBase.r1.c3 +
                0.1 -
                labradorBase.r1.c3 -
                0.1 +
                labradorBase.r1.c3 -
                0.1)
            : Math.random(),
          c4: pictureIsALab
            ? Math.random() *
              (labradorBase.r1.c4 +
                0.1 -
                labradorBase.r1.c4 -
                0.1 +
                labradorBase.r1.c4 -
                0.1)
            : Math.random(),
          c5: pictureIsALab
            ? Math.random() *
              (labradorBase.r1.c5 +
                0.1 -
                labradorBase.r1.c5 -
                0.1 +
                labradorBase.r1.c5 -
                0.1)
            : Math.random(),
        },
        r2: {
          c1: pictureIsALab
            ? Math.random() *
              (labradorBase.r2.c1 +
                0.1 -
                labradorBase.r2.c1 -
                0.1 +
                labradorBase.r2.c1 -
                0.1)
            : Math.random(),
          c2: pictureIsALab
            ? Math.random() *
              (labradorBase.r2.c2 +
                0.1 -
                labradorBase.r2.c2 -
                0.1 +
                labradorBase.r2.c2 -
                0.1)
            : Math.random(),
          c3: pictureIsALab
            ? Math.random() *
              (labradorBase.r2.c3 +
                0.1 -
                labradorBase.r2.c3 -
                0.1 +
                labradorBase.r2.c3 -
                0.1)
            : Math.random(),
          c4: pictureIsALab
            ? Math.random() *
              (labradorBase.r2.c4 +
                0.1 -
                labradorBase.r2.c4 -
                0.1 +
                labradorBase.r2.c4 -
                0.1)
            : Math.random(),
          c5: pictureIsALab
            ? Math.random() *
              (labradorBase.r2.c5 +
                0.1 -
                labradorBase.r2.c5 -
                0.1 +
                labradorBase.r2.c5 -
                0.1)
            : Math.random(),
        },
        r3: {
          c1: pictureIsALab
            ? Math.random() *
              (labradorBase.r3.c1 +
                0.1 -
                labradorBase.r3.c1 -
                0.1 +
                labradorBase.r3.c1 -
                0.1)
            : Math.random(),
          c2: pictureIsALab
            ? Math.random() *
              (labradorBase.r3.c2 +
                0.1 -
                labradorBase.r3.c2 -
                0.1 +
                labradorBase.r3.c2 -
                0.1)
            : Math.random(),
          c3: pictureIsALab
            ? Math.random() *
              (labradorBase.r3.c3 +
                0.1 -
                labradorBase.r3.c3 -
                0.1 +
                labradorBase.r3.c3 -
                0.1)
            : Math.random(),
          c4: pictureIsALab
            ? Math.random() *
              (labradorBase.r3.c4 +
                0.1 -
                labradorBase.r3.c4 -
                0.1 +
                labradorBase.r3.c4 -
                0.1)
            : Math.random(),
          c5: pictureIsALab
            ? Math.random() *
              (labradorBase.r3.c5 +
                0.1 -
                labradorBase.r3.c5 -
                0.1 +
                labradorBase.r3.c5 -
                0.1)
            : Math.random(),
        },
        r4: {
          c1: pictureIsALab
            ? Math.random() *
              (labradorBase.r4.c1 +
                0.1 -
                labradorBase.r4.c1 -
                0.1 +
                labradorBase.r4.c1 -
                0.1)
            : Math.random(),
          c2: pictureIsALab
            ? Math.random() *
              (labradorBase.r4.c2 +
                0.1 -
                labradorBase.r4.c2 -
                0.1 +
                labradorBase.r4.c2 -
                0.1)
            : Math.random(),
          c3: pictureIsALab
            ? Math.random() *
              (labradorBase.r4.c3 +
                0.1 -
                labradorBase.r4.c3 -
                0.1 +
                labradorBase.r4.c3 -
                0.1)
            : Math.random(),
          c4: pictureIsALab
            ? Math.random() *
              (labradorBase.r4.c4 +
                0.1 -
                labradorBase.r4.c4 -
                0.1 +
                labradorBase.r4.c4 -
                0.1)
            : Math.random(),
          c5: pictureIsALab
            ? Math.random() *
              (labradorBase.r4.c5 +
                0.1 -
                labradorBase.r4.c5 -
                0.1 +
                labradorBase.r4.c5 -
                0.1)
            : Math.random(),
        },
        r5: {
          c1: pictureIsALab
            ? Math.random() *
              (labradorBase.r5.c1 +
                0.1 -
                labradorBase.r5.c1 -
                0.1 +
                labradorBase.r5.c1 -
                0.1)
            : Math.random(),
          c2: pictureIsALab
            ? Math.random() *
              (labradorBase.r5.c2 +
                0.1 -
                labradorBase.r5.c2 -
                0.1 +
                labradorBase.r5.c2 -
                0.1)
            : Math.random(),
          c3: pictureIsALab
            ? Math.random() *
              (labradorBase.r5.c3 +
                0.1 -
                labradorBase.r5.c3 -
                0.1 +
                labradorBase.r5.c3 -
                0.1)
            : Math.random(),
          c4: pictureIsALab
            ? Math.random() *
              (labradorBase.r5.c4 +
                0.1 -
                labradorBase.r5.c4 -
                0.1 +
                labradorBase.r5.c4 -
                0.1)
            : Math.random(),
          c5: pictureIsALab
            ? Math.random() *
              (labradorBase.r5.c5 +
                0.1 -
                labradorBase.r5.c5 -
                0.1 +
                labradorBase.r5.c5 -
                0.1)
            : Math.random(),
        },
      });
    };
    const getNextModel = () => {
      getANewPicture();
      const weightImpact = pictureIsALab ? 1 : -1;
      const newModel = {
        r1: {
          c1: currentModel.r1.c1 + currentPicture.r1.c1 * weightImpact,
          c2: currentModel.r1.c2 + currentPicture.r1.c2 * weightImpact,
          c3: currentModel.r1.c3 + currentPicture.r1.c3 * weightImpact,
          c4: currentModel.r1.c4 + currentPicture.r1.c4 * weightImpact,
          c5: currentModel.r1.c5 + currentPicture.r1.c5 * weightImpact,
        },
        r2: {
          c1: currentModel.r2.c1 + currentPicture.r2.c1 * weightImpact,
          c2: currentModel.r2.c2 + currentPicture.r2.c2 * weightImpact,
          c3: currentModel.r2.c3 + currentPicture.r2.c3 * weightImpact,
          c4: currentModel.r2.c4 + currentPicture.r2.c4 * weightImpact,
          c5: currentModel.r2.c5 + currentPicture.r2.c5 * weightImpact,
        },
        r3: {
          c1: currentModel.r3.c1 + currentPicture.r3.c1 * weightImpact,
          c2: currentModel.r3.c2 + currentPicture.r3.c2 * weightImpact,
          c3: currentModel.r3.c3 + currentPicture.r3.c3 * weightImpact,
          c4: currentModel.r3.c4 + currentPicture.r3.c4 * weightImpact,
          c5: currentModel.r3.c5 + currentPicture.r3.c5 * weightImpact,
        },
        r4: {
          c1: currentModel.r4.c1 + currentPicture.r4.c1 * weightImpact,
          c2: currentModel.r4.c2 + currentPicture.r4.c2 * weightImpact,
          c3: currentModel.r4.c3 + currentPicture.r4.c3 * weightImpact,
          c4: currentModel.r4.c4 + currentPicture.r4.c4 * weightImpact,
          c5: currentModel.r4.c5 + currentPicture.r4.c5 * weightImpact,
        },
        r5: {
          c1: currentModel.r5.c1 + currentPicture.r5.c1 * weightImpact,
          c2: currentModel.r5.c2 + currentPicture.r5.c2 * weightImpact,
          c3: currentModel.r5.c3 + currentPicture.r5.c3 * weightImpact,
          c4: currentModel.r5.c4 + currentPicture.r5.c4 * weightImpact,
          c5: currentModel.r5.c5 + currentPicture.r5.c5 * weightImpact,
        },
      };
      if (
        currentModel.r1.c1 >= 200 ||
        currentModel.r1.c2 >= 200 ||
        currentModel.r1.c3 >= 200 ||
        currentModel.r1.c4 >= 200 ||
        currentModel.r1.c5 >= 200 ||
        currentModel.r2.c1 >= 200 ||
        currentModel.r2.c2 >= 200 ||
        currentModel.r2.c3 >= 200 ||
        currentModel.r2.c4 >= 200 ||
        currentModel.r2.c5 >= 200 ||
        currentModel.r3.c1 >= 200 ||
        currentModel.r3.c2 >= 200 ||
        currentModel.r3.c3 >= 200 ||
        currentModel.r3.c4 >= 200 ||
        currentModel.r3.c5 >= 200 ||
        currentModel.r4.c1 >= 200 ||
        currentModel.r4.c2 >= 200 ||
        currentModel.r4.c3 >= 200 ||
        currentModel.r4.c4 >= 200 ||
        currentModel.r4.c5 >= 200 ||
        currentModel.r5.c1 >= 200 ||
        currentModel.r5.c2 >= 200 ||
        currentModel.r5.c3 >= 200 ||
        currentModel.r5.c4 >= 200 ||
        currentModel.r5.c5 >= 200
      ) {
        return;
      }
      setCurrentModel(newModel);
      setPictureIsALab(Math.random() >= 0.2);
    };
    if (!inRevealMode) {
      setTimeout(() => {
        getNextModel();
      }, [32]);
    }
  }, [currentModel, inRevealMode, currentPicture, pictureIsALab]);

  return (
    <div
      className="App"
      onClick={() => {
        setInRevealMode(true);
      }}
    >
      <div>
        <span style={{ fontSize: "6rem", marginTop: "6rem" }}>
          {pictureIsALab ? "🦮" : "🌸"}
        </span>
        <div className="initialGrid">
          {["r1", "r2", "r3", "r4", "r5"].map((row, rowIndex) => {
            return ["c1", "c2", "c3", "c4", "c5"].map((col, colIndex) => {
              return (
                <div
                  key={
                    currentPicture[row][col] * Math.random() +
                    rowIndex +
                    colIndex
                  }
                  className="cell"
                  style={{
                    backgroundColor: `hsl(0, 0%, ${
                      currentPicture[row][col] * 100
                    }%`,
                  }}
                >
                  <span>{currentModel[row][col].toFixed(1)}</span>
                </div>
              );
            });
          })}
        </div>
      </div>
      <div>
        <div className="initialGrid">
          {["r1", "r2", "r3", "r4", "r5"].map((row, rowIndex) => {
            return ["c1", "c2", "c3", "c4", "c5"].map((col, colIndex) => {
              return (
                <div
                  key={
                    currentModel[row][col] * Math.random() + rowIndex + colIndex
                  }
                  className="cell"
                  style={{
                    backgroundColor: `hsl(0, 0%, ${
                      currentModel[row][col].toFixed(0) / 2
                    }%`,
                  }}
                ></div>
              );
            });
          })}
        </div>
        <div
          style={{
            fontSize: "6rem",
            textAlign: "center",
            margin: "auto",
            color: "white",
          }}
        >
          Modèle
        </div>
      </div>
    </div>
  );
}

export default App;
