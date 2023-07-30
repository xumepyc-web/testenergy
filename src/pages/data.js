import FilterInput from "../components/Input";
import CheckBox from "../components/CheckBox";
import Datepicker from "../components/Datepicker";
import SearchButton from "../components/SearchButton";
import DataTable from "../components/DataTable";

const DataPages = () => {
    return (
        <div>
            <FilterInput/>
            <SearchButton />
            <CheckBox />
            <Datepicker />
            <DataTable />
        </div>

    )
}
export default DataPages;