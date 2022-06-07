import React from 'react';
import PetListItem from './DeviceListItem';
import { useSelector } from 'react-redux';

const PetList = ({ pets }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold pb-4 text-green-700">Pets</h1>
      <ul className="">
        {pets.map((pet) => (
          <PetListItem key={pet.id} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default PetList;
