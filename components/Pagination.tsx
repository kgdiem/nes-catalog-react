import React from "react";

interface PaginationButtonPropTypes {
  active?: boolean;
  text: string | number;
  value: string | number;
  onClick: (val: string | number) => void;
}

const PaginationButton = ({
  active,
  text,
  value,
  onClick
}: PaginationButtonPropTypes) => (
  <button
    className={`nes-btn pagination-btn ${active ? "is-primary" : ""}`}
    onClick={() => onClick(value)}
  >
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
  if (!total || total === 1) {
    return <div />;
  }

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
          value={i}
        />
      );
    }
  } else {
    const middleButtons = numberOfButtons - 2;
    let currentPage =
      current === 1
        ? 2
        : current > totalButtons - middleButtons
        ? totalButtons - middleButtons
        : current;

    if (current > 2) {
      const val = current - 1;
      buttons.push(
        <PaginationButton text="<" onClick={click} key={"back"} value={val} />
      );
    }

    buttons.push(
      <PaginationButton
        active={current === 1}
        text={1}
        onClick={click}
        key={1}
        value={1}
      />
    );

    for (let i = 0; i < middleButtons; i++) {
      buttons.push(
        <PaginationButton
          active={currentPage === current}
          text={currentPage}
          value={currentPage}
          onClick={click}
          key={currentPage}
        />
      );

      currentPage += 1;
    }

    buttons.push(
      <PaginationButton
        active={current === totalButtons}
        text={totalButtons}
        onClick={click}
        key={totalButtons}
        value={totalButtons}
      />
    );

    if (current < totalButtons) {
      const val = current + 1;
      buttons.push(
        <PaginationButton
          text=">"
          onClick={click}
          key={"forward"}
          value={val}
        />
      );
    }
  }

  return <div className="text-center">{buttons}</div>;
};
