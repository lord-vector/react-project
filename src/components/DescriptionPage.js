import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DescriptionPage() {
  const { id } = useParams();
  console.log(id);
  return <div>DescriptionPage</div>;
}
