<xsl:stylesheet version="1.1"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:param name="album" select="'hello'" />

    <xsl:template match="albums">
        <xsl:for-each select="album[albumTitle/text() = $album]/songs/song">
            <xsl:choose>
                <xsl:when test="trackNumber = '01'">
                    <div id="{camelCase}" class="songLyrics toggleContent active">
                        <div class="songTitle"><xsl:value-of select="title" /></div>
                        <xsl:for-each select="lyrics/line">
                            <xsl:value-of select="." /><br/>
                        </xsl:for-each>
                    </div>
                </xsl:when>
                <xsl:when test="trackNumber != '01'">
                    <div id="{camelCase}" class="songLyrics toggleContent">
                        <div class="songTitle"><xsl:value-of select="title" /></div>
                        <xsl:for-each select="lyrics/line">
                            <xsl:value-of select="." /><br/>
                        </xsl:for-each>
                    </div>
                </xsl:when>
            </xsl:choose>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

