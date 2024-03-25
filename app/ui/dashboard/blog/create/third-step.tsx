import CreatableSelect from "react-select/creatable";
import Select from "react-select";
export default function ThirdStep() {
  const categories = [
    { value: 1, label: "Món chính" },
    { value: 2, label: "Món phụ" },
    { value: 3, label: "Món tráng miệng" },
    { value: 4, label: "Món khai vị" },
    { value: 5, label: "Món nước" },
    { value: 6, label: "Món chay" },
    { value: 7, label: "Món lẩu" },
    { value: 8, label: "Món nướng" },
    { value: 9, label: "Món xào" },
    { value: 10, label: "Món chiên" },
    { value: 11, label: "Món hầm" },
    { value: 12, label: "Món luộc" },
    { value: 13, label: "Món hấp" },
    { value: 14, label: "Món rang" },
    { value: 15, label: "Món kho" },
    { value: 16, label: "Món chưng" },
    { value: 17, label: "Món hấp" },
  ];

  const handleOnChangeCategory = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <fieldset className="border h-auto border-solvalue rounded-md border-gray-300 p-3 mx-1">
        <legend className="text-sm">Danh mục</legend>
        <Select
          className="w-full h-auto !text-sm"
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary: "gray",
            },
          })}
          isMulti
          options={categories}
          onChange={(e) => handleOnChangeCategory(e)}
        />
      </fieldset>
      <fieldset className="border h-auto border-solvalue rounded-md border-gray-300 p-3 mx-1">
        <legend className="text-sm">Tag</legend>
        <Select
          className="w-full h-auto !text-sm"
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary: "gray",
            },
          })}
          isMulti
          options={categories}
        />
      </fieldset>
    </div>
  );
}
