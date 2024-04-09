import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Skillcard({ imgSrc = "", text = "", alt = "" }) {
  return (
    <Card className="hover:z-20" sx={{ maxWidth: 245 }}>
      <CardMedia sx={{ height: 120 }} image={imgSrc} title={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
