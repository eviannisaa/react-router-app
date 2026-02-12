export const cxDisabled = (loading: boolean, value?: boolean) => {
     return loading && !value
          ? "opacity-80 bg-white w-full capitalize"
          : "bg-white w-full capitalize";
};

export const content = {
     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium iste blanditiis debitis consectetur accusamus laborum tempore asperiores recusandae eaque maiores.",
     date: "Last updated 5 mins ago",
};
