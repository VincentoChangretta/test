import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SeminarData, serverURL } from "app/server/config/config";
import { useFetchData } from "shared/api/hooks/useFetchData";
import { SeminarCard } from "features/SeminarCard";
import { RootState } from "app/store/store";
import { setSeminars } from "app/store/Slices/seminarSlices";
import { Page404 } from "features/Page404/Page404";

export const SeminarsContent = () => {
  const dispatch = useDispatch();
  const { data, error } = useFetchData<SeminarData>(serverURL);
  const seminars = useSelector((state: RootState) => state.seminars.seminars);

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setSeminars(data));
    }
  }, [data]);

  if (error) {
    return <Page404/>;
  }

  return (
    <section>
      <div className="main-container">
        <div className="flex flex-wrap justify-center gap-5">
          {seminars?.map((card) => <SeminarCard key={card.id} data={card} />)}
        </div>
      </div>
    </section>
  );
};
