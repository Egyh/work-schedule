import NamePlate, { NamePlateProps} from "@/components/User/NamePlate";

type NamePlateListProps = {
    data: Array<NamePlateProps>;
};

const NamePlateList = (props: NamePlateListProps) => {
    return props.data.map((NamePlate: NamePlateProps, i) => {
        return <NamePlate key={i} {...NamePlate} />;
    });
};

export default NamePlateList;