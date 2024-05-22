import { useImmer } from "use-immer"
import { useState } from "react";
import { initialTravelPlan } from "./places.js";

function PlaceTree({ id, parentId, plan, deletePlan }) {
  const place = plan[id];
  const childIds = place.childIds;

  const childPlaces = childIds.length > 0 && childIds.map((childId) => {
    return <PlaceTree key={childId} plan={plan} id={childId} parentId={id} deletePlan={deletePlan} />
  });

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces}
        </ol>
      )}
      <button onClick={() => deletePlan(parentId, id)}>delete</button>
    </li>
  );
}

export default function TravelPlan() {
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  const root = plan[0];
  const parentIds = root.childIds;

  const deletePlace = (parentId, childId) => {
    updatePlan((draft) => {
      const parent = draft[parentId];
      parent.childIds = parent.childIds.filter((id) => id !== childId);

      const deleteAllChildren = (id) => {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);

        delete draft[id];
      };

      deleteAllChildren(childId);
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {parentIds.length > 0 && parentIds.map((id) => (
          <PlaceTree key={id} id={id} parentId={0} plan={plan} deletePlan={deletePlace} />
        ))}
      </ol>
    </>
  );
}
