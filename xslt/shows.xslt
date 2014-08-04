<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:template match="show">
        <li>
            <div class="showTimeLocation">
                &#8212; <xsl:value-of select="date" /><xsl:text>&#160;</xsl:text> <xsl:value-of select="time" /> &#8212; <xsl:value-of select="venue/name" /> &#8212; <xsl:if test="venue/address"><xsl:value-of select="venue/address" />, </xsl:if><xsl:value-of select="venue/city" />, <xsl:value-of select="venue/state" />
                <xsl:if test="ticketsLink">
                    &#160;&#8212;&#160;<a href="{ticketsLink}" target="_blank">Buy tickets</a>
                </xsl:if>
            </div>
            <xsl:if test="additionalInfo or otherArtists">
                <div class="showMoreInfo">
                    <xsl:copy-of select="additionalInfo" /><xsl:text>&#160;</xsl:text><xsl:value-of select="otherArtists/relationship" />
                    <xsl:for-each select="otherArtists/artist">
                        <xsl:choose>
                            <xsl:when test="position() = 1"><xsl:text>&#160;</xsl:text></xsl:when>
                            <xsl:when test="position() = last()"><xsl:text> and </xsl:text></xsl:when>
                            <xsl:when test="position() &gt; 1"><xsl:text>, </xsl:text></xsl:when>
                        </xsl:choose>
                        <xsl:choose>
                            <xsl:when test="link">
                                <a href="{link}" target="_blank"><xsl:value-of select="name" /></a>
                            </xsl:when>
                            <xsl:when test="not(link)">
                                <xsl:value-of select="name" />
                            </xsl:when>
                        </xsl:choose>
                    </xsl:for-each>
                </div>
            </xsl:if>
        </li>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

