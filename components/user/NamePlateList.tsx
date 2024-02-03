import NamePlate, { NamePlateProps} from "@/components/User/NamePlate";

type NamePlateListProps = {
    data: Array<NamePlateProps>;
};

const NamePlateList = (props: NamePlateListProps) => {
    return props.data.map((namePlate: NamePlateProps, i) => {
        return <NamePlate key={i} {...namePlate} />;
    });
};

export default NamePlateList;