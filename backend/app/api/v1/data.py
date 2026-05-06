"""Data API routes."""

import random
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class DatasetRequest(BaseModel):
    name: str
    data: str


class DatasetResponse(BaseModel):
    id: str
    name: str
    format: str
    row_count: int
    insights: list[str]
    status: str
    created_at: str


class VisualizationResponse(BaseModel):
    chart_type: str
    x_axis: str
    y_axis: str
    data_points: list[dict]


@router.post("/datasets", response_model=DatasetResponse)
async def create_dataset(request: DatasetRequest) -> DatasetResponse:
    return DatasetResponse(
        id=str(uuid.uuid4()),
        name=request.name,
        format="csv",
        row_count=random.randint(50, 5000),
        insights=["Trend up 15%", "Outlier in Q3"],
        status="analyzed",
        created_at=datetime.now(timezone.utc).isoformat(),
    )


@router.get("/datasets/{id}/visualization", response_model=VisualizationResponse)
async def get_visualization(id: str) -> VisualizationResponse:
    return VisualizationResponse(
        chart_type="line",
        x_axis="date",
        y_axis="value",
        data_points=[
            {"x": "2026-01", "y": 120},
            {"x": "2026-02", "y": 135},
            {"x": "2026-03", "y": 128},
            {"x": "2026-04", "y": 145},
            {"x": "2026-05", "y": 160},
        ],
    )
