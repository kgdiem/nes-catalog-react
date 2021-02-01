import React from "react";

interface PaginationButtonPropTypes {
  active: boolean;
  text: string | number;
  onClick: () => void;
}

const PaginationButton = ({
  active,
  text,
  onClick
}: PaginationButtonPropTypes) => (
  <button className={`nes-btn ${active ? "is-primary" : ""}`} onClick={onClick}>
    {text}
  </button>
);

export interface PaginationPropTypes {
  numberOfButtons?: number;
  click?: (page: number) => void;
  current: number;
  pageSize: number;
  total: number;
}

export const Pagination = ({
  numberOfButtons = 6,
  click,
  current,
  pageSize,
  total
}: PaginationPropTypes) => {
  const totalButtons = Math.ceil(total / pageSize);
  const buttons = [];

  if (totalButtons <= numberOfButtons) {
    for (let i = 1; i <= totalButtons; i++) {
      buttons.push(
        <PaginationButton
          active={current === i}
          text={i}
          onClick={() => click(i)}
          key={i}
        />
      );
    }
  } else {
    const middleButtons = numberOfButtons - 2;
    let currentPage = current === 1 ? 2 : current;

    buttons.push(
      <PaginationButton
        active={current === 1}
        text={1}
        onClick={() => click(1)}
        key={1}
      />
    );

    for (let i = 0; i < middleButtons; i++) {
      <PaginationButton
        active={currentPage === current}
        text={currentPage}
        onClick={() => click(currentPage)}
        key={currentPage}
      />;

      currentPage += 1;
    }

    buttons.push(
      <PaginationButton
        active={current === totalButtons}
        text={totalButtons}
        onClick={() => click(totalButtons)}
        key={totalButtons}
      />
    );
  }

  return <div>{buttons}</div>;
};
