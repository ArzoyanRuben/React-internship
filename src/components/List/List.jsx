import React, { useCallback, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCustomModal from "../../hooks/useCustomModal";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { AddButton } from './../AddButton/AddButton';

export const List = ({ ListComponent, listUrl, ModalComponent, modalUrl }) => {
  const { isOpen, toggle } = useCustomModal();
  const [item, setItem] = useState([]);

  const { data, loading, error } = useFetch(listUrl);

  return (
    <>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {data && (
        <>
          <AddButton
            toggle={toggle}
            isOpen={isOpen}
            item={item}
            setItem={setItem}
          />
          <StyledList>
            {data.map((itemTest) => (
              <ListComponent
                key={itemTest.id}
                toggle={toggle}
                setItem={setItem}
                item={itemTest}
              />
            ))}
            {item?.length !== 0 && (
              <ModalComponent
                itemId={item?.id}
                isOpen={isOpen}
                toggle={toggle}
                setData={setItem}
                modalUrl={modalUrl}
              />
            )}
          </StyledList>
        </>
      )}
    </>
  );
};

const StyledList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
