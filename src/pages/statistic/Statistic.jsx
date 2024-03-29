import React, { useState, useEffect, Fragment } from "react";
import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import { ChartsContractsExpenses } from "../../components/charts-contracts-expenses";
import { ContractPerMonth } from "../../components/contrac-per-month";
import { AverageExecutionContract } from "../../components/average-execution-contract";
import { LoadingBar } from "../../components/LoadingBar";
import { getContracts } from "./getContracts";

import "./Statistic.scss";

export const Statistic = ({ filter, setFilter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [contractsChars, setContractsChars] = useState({
    contracts_number: "0",
    inversion: 0,
    top_ten: [
      {
        id: 0,
        month: 0,
        trimester: 0,
        title: "vacio",
        buyer_name: "vacio",
        date: "0",
        amount: 0,
        currency: "",
      },
    ],
    execution_mean: 0,
    months: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
  });

  const checkFromRender = () => {
    if (
      filter.category !== "Categoria" &&
      filter.year !== "Año" &&
      contractsChars.inversion === 0
    ) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (filter.category !== "Categoria" && filter.year !== "Año") {
      getContracts({ setIsLoading, setContractsChars, filter });
    }
  }, [filter]);

  return (
    <main className="container-statistic">
      <FilterCategory setFilter={setFilter} filter={filter} />
      {isLoading ? (
        <LoadingBar />
      ) : checkFromRender() ? (
        <p className="container-statistic--no-contracts">
          Para la categoria y el año no se encontraros datos{" "}
        </p>
      ) : filter.category === "Categoria" && filter.year === "Año" ? (
        <p className="container-statistic--no-filter">
          Filtra por categoria y año para obtener datos{" "}
        </p>
      ) : (
        <Fragment></Fragment>
      )}

      {contractsChars.inversion !== 0 ? (
        <>
          <CardTotalContacts filter={filter} contractsChars={contractsChars} />
          <ChartsContractsExpenses contractsChars={contractsChars} />
          <ContractPerMonth contractsChars={contractsChars} />
          <AverageExecutionContract contractsChars={contractsChars} />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};
