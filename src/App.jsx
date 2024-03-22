import "./App.css";
import { useEffect, useState } from "react";

function App({ numCount = 50 }) {
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sType, setSType] = useState("Sorting Algorithm");

  useEffect(() => {
    generateRandArr();
  }, []);

  function generateRandArr() {
    const a = Array.from({ length: numCount }, () =>
      Math.floor(Math.random() * 100)
    );
    setArr(a);
  }

  const bubbleSort = async () => {
    setSType("Bubblesort");
    setSorting(true);
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let swapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          swapped = true;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          // Update state to trigger re-render
          setArr([...arr]);
          await new Promise(
            (resolve) => setTimeout(resolve, 50) // Delay to visualize the sorting process
          );
        }
      }
      if (!swapped) break;
    }
    setSType("Sorting Algorithm");
    setSorting(false);
  };

  const insertionSort = async () => {
    setSType("Insertionsort");
    setSorting(true);
    const len = arr.length;

    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        setArr([...arr]);
        await new Promise(
          (resolve) => setTimeout(resolve, 50) // Delay to visualize the sorting process
        );
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }

    setSType("Sorting Algorithm");
    setSorting(false);
  };

  const selectionSort = async () => {
    setSType("Selectionsort");
    setSorting(true);
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        setArr([...arr]);
        await new Promise(
          (resolve) => setTimeout(resolve, 50) // Delay to visualize the sorting process
        );
      }
    }
    setSType("Sorting Algorithm");
    setSorting(false);
  };

  return (
    <>
      <h1>{`${sType} Visualizer`}</h1>
      <div className="arr">
        {arr.map((i, index) => {
          return (
            <div
              key={index}
              className="test"
              style={{ height: `${i * 5}px` }}
            ></div>
          );
        })}
      </div>
      <div className="controls">
        <button
          className="startbtn"
          onClick={() => generateRandArr()}
          disabled={sorting}
        >
          Refresh List
        </button>
        <button onClick={() => bubbleSort()} disabled={sorting}>
          {sorting ? "Sorting..." : "Bubblesort"}
        </button>
        <button onClick={() => insertionSort()} disabled={sorting}>
          {sorting ? "Sorting..." : "Insertionsort"}
        </button>
        <button onClick={() => selectionSort()} disabled={sorting}>
          {sorting ? "Sorting..." : "Selectionsort"}
        </button>
      </div>
    </>
  );
}

export default App;
