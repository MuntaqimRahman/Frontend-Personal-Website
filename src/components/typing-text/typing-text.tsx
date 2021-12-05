import { useState } from "react";
import AnimatedTypingCursor from "./cursor-animation";
import useInterval from "../../hooks/useInterval";

const adjectives = ["developer", "designer", "student"];
const animationStages = ["typing", "hovering", "deleting"];
const initialString = "I'm a ";

const TypingText = () => {
  const [animationStage, setAnimationStage] = useState<string>(
    animationStages[0]
  );
  const [displayedString, setDisplayedString] = useState<string>(initialString);
  const [beginningStringState, setBeginningStateString] = useState<string>(
    initialString
  );

  const [adjectiveIndex, setAdjectiveIndex] = useState<number>(0);
  const [adjectiveStringIndex, setAdjectiveStringIndex] = useState<number>(0);

  //Typing stage
  useInterval(
    () => {
      const adjectiveChar = adjectives[adjectiveIndex].charAt(
        adjectiveStringIndex
      );
      const newDisplayedString = displayedString + adjectiveChar;
      setDisplayedString(newDisplayedString);

      if (adjectiveStringIndex + 1 >= adjectives[adjectiveIndex].length) {
        const nextAdjectiveIndex = (adjectiveIndex + 1) % adjectives.length;

        setAdjectiveIndex(nextAdjectiveIndex);
        setAnimationStage(animationStages[1]);
        return;
      }

      setAdjectiveStringIndex(adjectiveStringIndex + 1);
    },
    animationStage === animationStages[0] ? 100 : null
  );

  //Hovering stage
  useInterval(
    () => {
      const nextDisplayedSentence = initialString + adjectives[adjectiveIndex];
      const newBeginnerState = findEquivalentString(
        displayedString,
        nextDisplayedSentence
      );

      setBeginningStateString(newBeginnerState);
      setAnimationStage(animationStages[2]);
    },
    animationStage === animationStages[1] ? 5000 : null
  );

  //Deletion stage
  useInterval(
    () => {
      const newDisplayedString = displayedString.slice(0, -1);
      setDisplayedString(newDisplayedString);

      if (newDisplayedString === beginningStringState) {
        const beginningStateAdjectiveStr = beginningStringState.replace(
          initialString,
          ""
        );

        setAdjectiveStringIndex(beginningStateAdjectiveStr.length);
        setAnimationStage(animationStages[0]);
      }
    },
    animationStage === animationStages[2] ? 100 : null
  );

  const findEquivalentString = (
    oldString: string,
    newString: string
  ): string => {
    const differenceIndex = [...newString].findIndex((char, index) => {
      return char !== oldString[index];
    });

    if (differenceIndex === -1) {
      return initialString;
    }

    return oldString.substr(0, differenceIndex);
  };

  return (
    <div>
      <span>
        {displayedString}
        <AnimatedTypingCursor
          delay={animationStage === animationStages[1] ? 800 : null}
        />
      </span>
    </div>
  );
};

export default TypingText;
