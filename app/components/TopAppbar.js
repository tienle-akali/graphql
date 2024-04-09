import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";

const TopAppbar = () => {
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar className="justify-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppbar;
