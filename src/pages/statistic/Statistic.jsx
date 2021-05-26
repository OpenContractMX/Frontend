import React from "react";

import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import { ChartsContractsExpenses } from "../../components/charts-contracts-expenses";
import { ContractPerMonth } from "../../components/contrac-per-month";

import "./Statistic.scss";

export const Statistic = () => {
  return (
    <main className="container-statistic">
      <FilterCategory />
      <CardTotalContacts />
      <ChartsContractsExpenses />
      <ContractPerMonth />
    </main>
  );
};
